import { createMemo, For, Show } from "solid-js";
import { Title } from "@solidjs/meta";

import { useTranslation, useTranslator } from "~/locale";
import { Page } from "~/components/Page";
import { SpeakerInfo } from "~/components/SpeakerInfo";
import { useParams } from "@solidjs/router";

import * as Dict from "~/i18n/paper";
import { program } from "~/i18n/program";
import { PaperInfo } from "~/components/PaperInfo";

export default function Paper() {
  const t = useTranslator(Dict);

  const sessionInfo = createMemo(() => {
    const id = `paper-${useParams().id}`;
    for (const day of program) {
      for (const timeslot of day.timeslots) {
        for (const session of timeslot.sessions) {
          if (session.id === id) {
            return {
              date: day.date,
              time: timeslot.time,
              session,
            };
          }
        }
      }
    }
    return undefined;
  });

  const title = sessionInfo() ? useTranslation(sessionInfo()!.session.title) : undefined;
  const date = sessionInfo() ? useTranslation(sessionInfo()!.date) : undefined;
  const time = sessionInfo() ? sessionInfo()!.time : undefined;
  const location = sessionInfo() && sessionInfo()!.session.location ? useTranslation(sessionInfo()!.session.location!) : undefined;

  return (
    <>
      <Title>{t("PageTitle")}</Title>
      <Page class="program" title={<span innerHTML={title ? title() : ""}></span>}>
        <Show when={sessionInfo()}>
          <div>
            <h2>{t("Information")}</h2>
            <p class="!indent-0"><b>{t("Time")}</b>{date ? date() : ""}, {time ?? ""}</p>
            <p class="!indent-0"><b>{t("Location")}</b>{location ? location() : ""}</p>
          </div>

          <div>
            <h2>{t("Chair")}</h2>
            <div class="space-y-4">
              <For each={sessionInfo()!.session.chairs}>
                {(chair) => <SpeakerInfo speaker={chair} />}
              </For>
            </div>
          </div>

          <Show when={sessionInfo()!.session.papers}>
            <h2>{t("Papers")}</h2>
            <div class="space-y-4">
              <For each={sessionInfo()!.session.papers}>
                {(paper) => <PaperInfo paper={paper} />}
              </For>
            </div>
          </Show>
        </Show>
      </Page>
    </>
  );
}