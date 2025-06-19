import { For, Show, Suspense } from "solid-js";
import * as i18n from "@solid-primitives/i18n";
import { Title } from "@solidjs/meta";

import { useDictionary, useLocale } from "~/locale";
import { speakers } from "~/i18n/cjkworkshop";
import { Page } from "~/components/Page";
import { CommitteeMember } from "~/components/CommitteeMember";

export default function CJKWorkshop() {
  const dict = useDictionary("cjkworkshop");
  const locale = useLocale();
  return (
    <Suspense>
      <Show when={dict()}>
        {(dict) => {
          const t = i18n.translator(dict);
          return (
            <>
              <Title>{t("PageTitle")}</Title>
              <Page title={<span innerHTML={t("Title")}></span>}>
                <div class="mb-0" innerHTML={t("Content")}></div>
                <h2>{t("SpeakerSectionTitle")}</h2>
                <div class="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-x-8 gap-y-6 my-8">
                  <For each={speakers}>
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
          )
        }}
      </Show>
    </Suspense>
  );
}