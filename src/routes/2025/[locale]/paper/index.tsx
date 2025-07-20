import { For } from "solid-js";
import { Title } from "@solidjs/meta";

import * as Dict from "~/i18n/paper";

import { useTranslator, useLocale } from "~/locale";
import { Page } from "~/components/Page";
import { PaperInfo } from "~/components/PaperInfo";
import { programPapers } from "~/i18n/programPapers";

export default function PaperSessions() {
  const t = useTranslator(Dict);
  const locale = useLocale();

  return (
    <>
      <Title>{t("PageTitle")}</Title>
      <Page title={t("Title")}>
        <h2>{t("CallForPaper")}</h2>
        <p innerHTML={t("CallForPaperLink")}></p>

        <div class="space-y-4">
          <h2>{t("AcceptedPapers")}</h2>
          <For each={Object.entries(programPapers)}>
            {([id, session]) => (
              <div class="space-y-2">
                <h3>{session.title[locale()]}</h3>
                <For each={session.papers}>
                  {(paper) => <PaperInfo paper={paper} />}
                </For>
              </div>
            )}
          </For>
        </div>
      </Page>
    </>
  );
}
