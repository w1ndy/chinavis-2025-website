import { Title } from "@solidjs/meta";
import { Show, Suspense } from "solid-js";
import * as i18n from "@solid-primitives/i18n";

import { Page } from "~/components/Page";
import { useDictionary } from "~/locale";

export default function Exhibition() {
  const dict = useDictionary("exhibition");
  return (
    <Suspense>
      <Show when={dict()}>
        {(dict) => {
          const t = i18n.translator(dict);
          return (
            <>
              <Title>{t("PageTitle")}</Title>
              <Page title={<span innerHTML={t("Title")}></span>} class="list-outside [&_li]:indent-0 [&_ul]:list-disc [&_ul]:ml-8 [&_ol]:list-decimal [&_ol]:ml-8">
                <div innerHTML={t("Content")}></div>
              </Page>
            </>
          );
        }}
      </Show>
    </Suspense>
  );
}