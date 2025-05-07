import { Title } from "@solidjs/meta";
import { Show, Suspense } from "solid-js";
import * as i18n from "@solid-primitives/i18n";

import { Page } from "~/components/Page";
import { Section } from "~/components/Section";
import { useDictionary } from "~/locale";

export default function Registration() {
  const dict = useDictionary("registration");
  return (
    <Suspense>
      <Show when={dict()}>
        {(dict) => {
          const t = i18n.translator(dict);
          return (
            <>
              <Title>{t("PageTitle")}</Title>
              <Page title={<span innerHTML={t("RegistrationTitle")}></span>}>
                <Section><p class="**:indent-0 text-center">{t("ToBeAnnounced")}</p></Section>
              </Page>
            </>
          );
        }
        }
      </Show>
    </Suspense>
  );
}