import { For, Show } from "solid-js";
import { useTranslation, useTranslator } from "~/locale";

export interface Speaker {
  name: { zh: string; en: string };
  suffix?: { zh: string; en: string };
  affiliation: { zh: string; en: string };
  photo?: string;

  description?: { zh: string; en: string };
  talk?: { zh: string; en: string };
  abstract?: { zh: string; en: string };

  cospeakers?: Speaker[];
}

const Dict = {
  zh: {
    abstract: "报告摘要：",
    description: "讲者简介：",
  },
  en: {
    abstract: "Abstract: ",
    description: "Speaker Bio: ",
  },
}

export function SpeakerName(props: { class?: string; speaker: Speaker }) {
  const name = useTranslation(props.speaker.name);
  const suffix = props.speaker.suffix ? useTranslation(props.speaker.suffix) : undefined;
  const affiliation = useTranslation(props.speaker.affiliation);

  return (
    <div class={`flex flex-row items-center my-2 ${props.class}`}>
      <Show when={props.speaker.photo}>
        <img class="w-13 h-13 object-cover border border-gray-300 rounded-full mr-3" src={props.speaker.photo} alt={name()} />
      </Show>
      <div class="flex flex-col justify-center">
        <div class="font-semibold leading-6 text-left">{name()} <Show when={suffix}>{suffix!()}</Show></div>
        <div class="text-gray-600 dark:text-gray-400  leading-6 text-left">{affiliation()}</div>
      </div>
    </div>
  )
}

export function SpeakerInfo(props: { class?: string; speaker: Speaker; nameOnly?: boolean }) {
  const t = useTranslator(Dict);

  const description = props.speaker.description ? useTranslation(props.speaker.description) : undefined;
  const talk = props.speaker.talk ? useTranslation(props.speaker.talk) : undefined;
  const abstract = props.speaker.abstract ? useTranslation(props.speaker.abstract) : undefined;

  return (
    <div>
      <Show when={talk}>
        <h3>{talk!()}</h3>
      </Show>
      <SpeakerName class={props.class} speaker={props.speaker} />
      <Show when={props.speaker.cospeakers}>
        <For each={props.speaker.cospeakers}>
          {(cospeaker) => (
            <SpeakerName
              speaker={cospeaker}
            />
          )}
        </For>
      </Show>
      <Show when={abstract && !props.nameOnly}>
        <div class="mt-1" innerHTML={`<b>${t("abstract")}</b>${abstract!()}`} />
      </Show>
      <Show when={description && !props.nameOnly}>
        <div class="mt-1" innerHTML={`<b>${t("description")}</b>${description!()}`} />
      </Show>
    </div>
  );
}