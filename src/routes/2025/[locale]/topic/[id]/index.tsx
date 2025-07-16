import { For, Show } from "solid-js";
import { Title } from "@solidjs/meta";

import { useTranslator } from "~/locale";
import { Page } from "~/components/Page";
import { SpeakerInfo } from "~/components/SpeakerInfo";
import * as Dict from "~/i18n/topic";
import { useSessionInfo } from "~/utils/useSessionInfo";

export default function Topic() {
  const t = useTranslator(Dict);

  const {
    session, title, date, time, location
  } = useSessionInfo("topic");

  return (
    <>
      <Title>{t("PageTitle")}</Title>
      <Page class="program" title={<span innerHTML={title ? title() : ""}></span>}>
        <Show when={session()}>
          <div>
            <h2>{t("Information")}</h2>
            <p class="!indent-0"><b>{t("Time")}</b>{date ? date() : ""}, {time ?? ""}</p>
            <p class="!indent-0"><b>{t("Location")}</b>{location ? location() : ""}</p>
          </div>

          <div>
            <h2>{t("Chair")}</h2>
            <div class="space-y-4">
              <For each={session()!.session.chairs}>
                {(chair) => <SpeakerInfo speaker={chair} />}
              </For>
            </div>
          </div>

          <Show when={session()!.session.speakers}>
            <h2>{t("Talks")}</h2>
            <div class="space-y-4">
              <For each={session()!.session.speakers}>
                {(speaker) => <SpeakerInfo speaker={speaker} />}
              </For>
            </div>
          </Show>
        </Show>
      </Page>
    </>
  );
}