import { For } from "solid-js";
import { Title } from "@solidjs/meta";

import { useTranslation, useTranslator } from "~/locale";
import * as Dict from "~/i18n/cjkworkshop";
import { Page } from "~/components/Page";
import { SpeakerInfo } from "~/components/SpeakerInfo";

import "./cjkworkshop.css";

export default function CJKWorkshop() {
  const t = useTranslator(Dict);
  const panelTitle = useTranslation(Dict.panel.title);
  return (
    <>
      <Title>{t("PageTitle")}</Title>
      <Page class="cjkworkshop" title={<span innerHTML={t("Title")}></span>}>
        <div innerHTML={t("Information")}></div>
        <div>
          <h2>{t("Organizers")}</h2>
          <div class="speaker-grid">
            <For each={Dict.organizers}>
              {(speaker) => (
                <div>
                  <SpeakerInfo speaker={speaker} />
                </div>
              )}
            </For>
          </div>
        </div>
        <div innerHTML={t("Program")}></div>
        <For each={Dict.sessions}>
          {(session) => {
            const title = useTranslation(session.title);
            return (
              <div class="space-y-5">
                <h2>{title()}</h2>

                <div>
                  <h3>{t("SessionChair")}</h3>
                  <SpeakerInfo speaker={session.chair} />
                </div>

                <For each={session.speakers}>
                  {(speaker) => (
                    <div>
                      <SpeakerInfo speaker={speaker} />
                    </div>
                  )}
                </For>
              </div>
            )
          }}
        </For>

        <div class="space-y-5">
          <h2>{panelTitle()}</h2>

          <div>
            <h3>{t("SessionChair")}</h3>
            <SpeakerInfo speaker={Dict.panel.chair} />
          </div>

          <div>
            <h3>{t("Panelists")}</h3>
            <div class="speaker-grid">
              <For each={Dict.panel.speakers}>
                {(speaker) => (
                  <div>
                    <SpeakerInfo speaker={speaker} />
                  </div>
                )}
              </For>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}