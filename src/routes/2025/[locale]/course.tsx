import { For } from "solid-js";
import { Title } from "@solidjs/meta";

import { Page } from "~/components/Page";
import { useTranslator, useTranslation } from "~/locale";

import * as Dict from "~/i18n/course";
import { SpeakerInfo } from "~/components/SpeakerInfo";

export default function Course() {
  const t = useTranslator(Dict);
  return (
    <>
      <Title>{t("PageTitle")}</Title>
      <Page title={t("Title")}>
        <For each={Dict.courses}>
          {(course, index) => {
            const title = useTranslation(course.title);
            const date = useTranslation(course.date);
            const location = useTranslation(course.location);
            const description = useTranslation(course.description);
            return (
              <div class="course">
                <h2><a id={course.id}></a>{index() + 1}. {title()}</h2>

                <h3>{t("Schedule")}</h3>
                <p class="!indent-0"><b>{t("Date")}</b>{date()}</p>
                <p class="!indent-0"><b>{t("Location")}</b>{location()}</p>

                <h3>{t("Description")}</h3>
                <p innerHTML={description()}></p>

                <h3>{t("Speakers")}</h3>
                <For each={course.speakers}>
                  {(speaker) => (<SpeakerInfo speaker={speaker} />)}
                </For>
              </div>
            )
          }}
        </For>
      </Page>
    </>
  );
}