import { Title } from "@solidjs/meta";
import { createEffect, Show, Suspense } from "solid-js";
import * as i18n from "@solid-primitives/i18n";

import { Page } from "~/components/Page";
import { Section } from "~/components/Section";
import { useDictionary } from "~/locale";

export default function Home() {
  const dict = useDictionary("home");
  return (
    <Suspense>
      <Show when={dict()}>
        {(dict) => {
          const t = i18n.translator(dict);
          createEffect(() => {
            console.log("Home dict", dict());
          })
          return (
            <>
              <Title>{t("PageTitle")}</Title>
              <Page>
                <Section title={t("ConferenceInformation")!}>
                  <div class="space-y-2" innerHTML={t('ConferenceInformationContent')}></div>
                </Section>
                <Section title={t('Sponsors')!}>
                  <p>{t("ToBeAnnounced")}</p>
                </Section>
              </Page>
            </>
          );
        }}
      </Show>
    </Suspense>
  );
}
