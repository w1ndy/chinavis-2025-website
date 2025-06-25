import { Title } from "@solidjs/meta";

import { type Dict, useTranslator } from "~/locale";
import { Page } from "./Page";

export function MarkdownPage(props: { dict: Dict, variables?: Record<string, string> }) {
  const t = useTranslator(props.dict);
  return (
    <>
      <Title>{t("PageTitle")}</Title>
      <Page title={t("Title")}>
        <div innerHTML={t("Content", props.variables)}></div>
      </Page>
    </>
  );
}