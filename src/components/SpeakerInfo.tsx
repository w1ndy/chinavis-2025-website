import { Show } from "solid-js";
import { useTranslation, useTranslator } from "~/locale";

export interface Speaker {
  name: { zh: string; en: string };
  affiliation: { zh: string; en: string };
  photo: string;

  description?: { zh: string; en: string };
  talk?: { zh: string; en: string };
  abstract?: { zh: string; en: string };
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

export function SpeakerInfo(props: { speaker: Speaker }) {
  const t = useTranslator(Dict);

  const name = useTranslation(props.speaker.name);
  const affiliation = useTranslation(props.speaker.affiliation);
  const description = props.speaker.description ? useTranslation(props.speaker.description) : undefined;
  const talk = props.speaker.talk ? useTranslation(props.speaker.talk) : undefined;
  const abstract = props.speaker.abstract ? useTranslation(props.speaker.abstract) : undefined;

  return (
    <div>
      <Show when={talk}>
        <h3>{talk!()}</h3>
      </Show>
      <div class="flex flex-row items-center my-2">
        <img class="w-13 h-13 object-cover border border-gray-300 rounded-full mr-3" src={props.speaker.photo} alt={name()} />
        <div class="flex flex-col justify-center">
          <div class="font-semibold leading-6">{name()}</div>
          <div class="text-gray-600 dark:text-gray-400  leading-6">{affiliation()}</div>
        </div>
      </div>
      <Show when={abstract}>
        <div innerHTML={`<b>${t("abstract")}</b>${abstract!()}`} />
      </Show>
      <Show when={description}>
        <div innerHTML={`<b>${t("description")}</b>${description!()}`} />
      </Show>
    </div>
  );
}