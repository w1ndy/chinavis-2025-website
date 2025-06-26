import { For } from "solid-js";
import { Title } from "@solidjs/meta";

import { useTranslator } from "~/locale";
import * as Dict from "~/i18n/cjkworkshop";
import { Page } from "~/components/Page";
import { SpeakerInfo } from "~/components/SpeakerInfo";

export default function CJKWorkshop() {
  const t = useTranslator(Dict);
  return (
    <>
      <Title>{t("PageTitle")}</Title>
      <Page title={<span innerHTML={t("Title")}></span>}>
        <div class="mb-0" innerHTML={t("Content")}></div>
        <For each={Dict.speakers}>
          {(speaker) => (
            <SpeakerInfo
              speaker={speaker}
            />
          )}
        </For>
        <i>{t("MoreTalksTBD")}</i>
      </Page>
    </>
  );
}