import { Title } from "@solidjs/meta";
import { Show, Suspense } from "solid-js";
import * as i18n from "@solid-primitives/i18n";

import { Page } from "~/components/Page";
import { Section } from "~/components/Section";
import { useDictionary, useLocale } from "~/locale";

export default function Paper() {
  const locale = useLocale();
  const dict = useDictionary("paper");
  return (
    <Suspense>
      <Show when={dict()}>
        {(dict) => {
          const t = i18n.translator(dict);
          return (
            <>
              <Title>{t("PageTitle")}</Title>
              <Page title={<span innerHTML={t("CallForPaperTitle")}></span>}>
                <Section>
                  {t("CallForPaperIntro")}
                </Section>
                <Section title={t("SubmissionGuide")}>
                  <div class="space-y-2" innerHTML={t("SubmissionGuideContent")}></div>
                </Section>
                <Section title={t("CFPTopics")}>
                  <div class="space-y-2" innerHTML={t("CFPTopicsContent")}></div>
                </Section>
                <Section title={t("Timeline")} class="**:indent-0">
                  <div class="grid grid-cols-1 xl:grid-cols-[230px_1fr] gap-2 text-left" classList={{ "xl:grid-cols-[400px_1fr]": locale() == "en" }} innerHTML={t("TimelineContent")}></div>
                </Section>
                <Section title={t("ConferenceChairs")} class="**:indent-0">
                  <div class="grid grid-cols-[50px_1fr] gap-2 text-left" classList={{ "grid-cols-[120px_1fr]": locale() == "en" }} innerHTML={t("ConferenceChairsContent")}></div>
                </Section>
                <Section title={t("PaperChairs")} class="**:indent-0">
                  <div class="grid grid-cols-[50px_1fr] gap-2 text-left" classList={{ "grid-cols-[120px_1fr]": locale() == "en" }} innerHTML={t("PaperChairsContent")}></div>
                </Section>
              </Page>
            </>
          );
        }}
      </Show>
    </Suspense>
  );
}