import { For } from "solid-js";
import { Title } from "@solidjs/meta";

import * as Dict from "~/i18n/poster";

import { useTranslator } from "~/locale";
import { Page } from "~/components/Page";
import { PaperInfo } from "~/components/PaperInfo";
import { programPosters } from "~/i18n/programPosters";

export default function Poster() {
  const t = useTranslator(Dict);

  return (
    <>
      <Title>{t("PageTitle")}</Title>
      <Page title={t("Title")}>
        <h2>{t("CallForPoster")}</h2>
        <p innerHTML={t("CallForPosterLink")}></p>

        <div class="space-y-2">
          <h2>{t("AcceptedPosters")}</h2>
          <For each={programPosters}>
            {(poster) => <PaperInfo paper={poster} />}
          </For>
        </div>
      </Page>
    </>
  );
}
