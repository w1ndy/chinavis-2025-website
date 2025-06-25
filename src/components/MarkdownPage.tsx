import { Show, Suspense } from "solid-js";
import * as i18n from "@solid-primitives/i18n";
import { Title } from "@solidjs/meta";

import { useDictionary } from "~/locale";
import { Page } from "./Page";

export function MarkdownPage(props: { dict: string, variables?: Record<string, string> }) {
  const dict = useDictionary(props.dict);
  return (
    <Suspense>
      <Show when={dict()}>
        {(dict) => {
          const t = i18n.translator(dict, i18n.resolveTemplate);
          return (
            <>
              <Title>{t("PageTitle")}</Title>
              <Page title={<span innerHTML={t("Title")}></span>}>
                <div innerHTML={t("Content", props.variables)}></div>
              </Page>
            </>
          )
        }}
      </Show>
    </Suspense>
  );
}