import { For } from "solid-js";
import { Title } from "@solidjs/meta";

import { useTranslator, useLocale } from "~/locale";
import * as Dict from "~/i18n/cjkworkshop";
import { Page } from "~/components/Page";
import { CommitteeMember } from "~/components/CommitteeMember";

export default function CJKWorkshop() {
  const t = useTranslator(Dict);
  const locale = useLocale();
  return (
    <>
      <Title>{t("PageTitle")}</Title>
      <Page title={<span innerHTML={t("Title")}></span>}>
        <div class="mb-0" innerHTML={t("Content")}></div>
        <h2>{t("SpeakerSectionTitle")}</h2>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-x-8 gap-y-6 my-8">
          <For each={Dict.speakers}>
            {(speaker) => (
              <CommitteeMember
                name={typeof speaker.name === "string" ? speaker.name : speaker.name[locale()]}
                affiliation={speaker.affiliation[locale()]}
                photo={speaker.photo}
              />
            )}
          </For>
        </div>
        <i>{t("MoreSpeakersTBD")}</i>
      </Page>
    </>
  );
}