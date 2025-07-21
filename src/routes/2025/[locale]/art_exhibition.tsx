import { For } from "solid-js";
import { Title } from "@solidjs/meta";

import * as Dict from "~/i18n/artExhibition";

import { useTranslator } from "~/locale";
import { Page } from "~/components/Page";
import { PaperInfo } from "~/components/PaperInfo";
import { programArtExhibitions } from "~/i18n/programArtExhibitions";

export default function ArtExhibition() {
  const t = useTranslator(Dict);

  return (
    <>
      <Title>{t("PageTitle")}</Title>
      <Page title={t("Title")}>
        <div class="space-y-6">
          <For each={programArtExhibitions}>
            {(exb) => <PaperInfo paper={exb} />}
          </For>
        </div>
      </Page>
    </>
  );
}
