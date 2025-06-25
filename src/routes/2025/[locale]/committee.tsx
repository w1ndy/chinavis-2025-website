import { Title } from "@solidjs/meta";
import { For } from "solid-js";

import { Page } from "~/components/Page";
import { useTranslator, useLocale } from "~/locale";
import * as Dict from "~/i18n/committee";
import { Section } from "~/components/Section";
import { CommitteeMember } from "~/components/CommitteeMember";

export default function Committee() {
  const locale = useLocale();
  const t = useTranslator(Dict);
  return (
    <>
      <Title>{t("PageTitle")}</Title>
      <Page class="list-outside [&_li]:indent-0 [&_ul]:list-disc [&_ul]:ml-8 [&_ol]:list-decimal [&_ol]:ml-8">
        <For each={Dict.committee}>
          {(committee) => (
            <Section title={committee.role[locale()]}>
              <div class="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-x-8 gap-y-6 my-8">
                <For each={committee.members}>
                  {(member) => (
                    <CommitteeMember
                      name={member.name[locale()]}
                      affiliation={member.affiliation[locale()]}
                      photo={member.photo}
                    />
                  )}
                </For>
              </div>
            </Section>
          )}
        </For>
      </Page>
    </>
  );
}