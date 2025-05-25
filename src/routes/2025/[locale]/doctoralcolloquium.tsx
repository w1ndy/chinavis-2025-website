import { Show, Suspense } from "solid-js";
import { Title } from "@solidjs/meta";
import * as i18n from "@solid-primitives/i18n";

import { useDictionary } from "~/locale";
import { Page } from "~/components/Page";

export default function DoctoralColloquium() {
  const dict = useDictionary("doctoralcolloquium");
  return (
    <Suspense>
      <Show when={dict()}>
        {(dict) => {
          const t = i18n.translator(dict);
          return (
            <>
              <Title>{t("PageTitle")}</Title>
              <Page title={<span innerHTML={t("Title")}></span>}>
                <div innerHTML={t("Content")}></div>
              </Page>
            </>
          )
        }}
      </Show>
    </Suspense>
  );
}