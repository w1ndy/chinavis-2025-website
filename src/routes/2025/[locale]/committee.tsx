import { Title } from "@solidjs/meta";
import { For, Show, Suspense } from "solid-js";
import * as i18n from "@solid-primitives/i18n";

import { Page } from "~/components/Page";
import { useDictionary, useLocale } from "~/locale";
import { Section } from "~/components/Section";
import { CommitteeMember } from "~/components/CommitteeMember";

import { committee } from "~/i18n/committee";

export default function Committee() {
  const locale = useLocale();
  const dict = useDictionary("committee");
  return (
    <Suspense>
      <Show when={dict()}>
        {(dict) => {
          const t = i18n.translator(dict);
          return (
            <>
              <Title>{t("PageTitle")}</Title>
              <Page class="list-outside [&_li]:indent-0 [&_ul]:list-disc [&_ul]:ml-8 [&_ol]:list-decimal [&_ol]:ml-8">
                <For each={committee}>
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
        }}
      </Show>
    </Suspense>
  );
}