import { Show, Suspense } from "solid-js";
import { Title } from "@solidjs/meta";
import * as i18n from "@solid-primitives/i18n";

import { useDictionary, useLocale } from "~/locale";
import { Page } from "~/components/Page";

export default function Volunteer() {
  const locale = useLocale();
  const dict = useDictionary("volunteer");
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