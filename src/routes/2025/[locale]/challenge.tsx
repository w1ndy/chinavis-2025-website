import { Title } from "@solidjs/meta";
import { Show, Suspense } from "solid-js";
import * as i18n from "@solid-primitives/i18n";

import { Page } from "~/components/Page";
import { Section } from "~/components/Section";
import { useDictionary, useLocale } from "~/locale";
import SubsectionHeader from "~/components/SubsectionHeader";

export default function Challenge() {
  const locale = useLocale();
  const dict = useDictionary("challenge");
  return (
    <Suspense>
      <Show when={dict()}>
        {(dict) => {
          const t = i18n.translator(dict);
          return (
            <>
              <Title>{t("Title")}</Title>
              <Page title={<span innerHTML={t("PageTitle")}></span>} class="list-outside [&_li]:indent-0 [&_ul]:list-disc [&_ul]:ml-8 [&_ol]:list-decimal [&_ol]:ml-8">
                <Section title={t("Introduction.Title")}>
                  {t("Introduction.Content")}
                </Section>

                <Section title={t("ChallengeDetails.Title")}>
                  <p>{t("ChallengeDetails.Content")}</p>

                  <SubsectionHeader number={1} title={t("Track1.Title")} />
                  <p class="indent-0"><b class="text-lg">{t("Track1.Problem1.Title")}</b></p>
                  <div class="space-y-2" innerHTML={t("Track1.Problem1.Content")}></div>
                  <p class="indent-0 mt-4"><b class="text-lg">{t("Track1.Problem2.Title")}</b></p>
                  <div class="space-y-2" innerHTML={t("Track1.Problem2.Content")}></div>

                  <SubsectionHeader number={2} title={t("Track2.Title")} />
                  <p class="indent-0"><b class="text-lg">{t("Track2.Topic")}</b></p>
                  <div class="space-y-2" innerHTML={t("Track2.Introduction")}></div>
                  <p class="indent-0 mt-4"><b class="text-lg">{t("Track2.Problem.Title")}</b></p>
                  <div class="space-y-2" innerHTML={t("Track2.Problem.Content")}></div>
                </Section>

                <Section title={t("Notes.Title")}>
                  <SubsectionHeader number={1} title={t("Notes.Registration.Title")} />
                  <div class="space-y-2" innerHTML={t("Notes.Registration.Content")}></div>

                  <SubsectionHeader number={2} title={t("Notes.Method.Title")} />
                  <div class="space-y-2" innerHTML={t("Notes.Method.Content")}></div>

                  <SubsectionHeader number={3} title={t("Notes.Submission.Title")} />
                  <div class="space-y-2" innerHTML={t("Notes.Submission.Content")}></div>

                  <SubsectionHeader number={4} title={t("Notes.Requirements.Title")} />
                  <div class="space-y-2 [&_li_>_ul]:ml-8" innerHTML={t("Notes.Requirements.Content")}></div>
                </Section>

                <Section title={t("Rules.Title")}>
                  <div class="space-y-2" innerHTML={t("Rules.Content")}></div>
                </Section>

                <Section title={t("Prizes.Title")}>
                  <div class="space-y-2" innerHTML={t("Prizes.Content")}></div>
                </Section>

                <Section title={t("Timeline.Title")}>
                  <div class="space-y-2" innerHTML={t("Timeline.Content")}></div>
                </Section>

                <Section title={t("Downloads.Title")}>
                  <div class="space-y-2" innerHTML={t("Downloads.Content")}></div>
                </Section>

                <Section title={t("Others.Title")}>
                  <div class="space-y-2" innerHTML={t("Others.Content")}></div>
                </Section>

                <Section title={t("Committee.Title")} class="**:indent-0">
                  <div class="grid grid-cols-[50px_1fr] gap-2 text-left" classList={{ "grid-cols-[120px_1fr]": locale() == "en" }} innerHTML={t("Committee.Content")}></div>
                </Section>

                <Section title={t("History.Title")}>
                  <div class="space-y-2" innerHTML={t("History.Content")}></div>
                </Section>
              </Page>
            </>
          );
        }}
      </Show>
    </Suspense>
  );
}