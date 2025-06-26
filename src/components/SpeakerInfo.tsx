import { useTranslation } from "~/locale";

export interface Speaker {
  name: { zh: string; en: string };
  affiliation: { zh: string; en: string };
  photo: string;
  description: { zh: string; en: string };
}

export function SpeakerInfo(props: { speaker: Speaker }) {
  const name = useTranslation(props.speaker.name);
  const affiliation = useTranslation(props.speaker.affiliation);
  const description = useTranslation(props.speaker.description);

  return (
    <div>
      <div class="flex flex-row items-center mt-4 mb-2">
        <img class="w-13 h-13 object-cover border border-gray-300 rounded-full mr-3" src={props.speaker.photo} alt={name()} />
        <div class="flex flex-col justify-center">
          <div class="font-semibold leading-6">{name()}</div>
          <div class="text-gray-600 dark:text-gray-400  leading-6">{affiliation()}</div>
        </div>
      </div>
      <div class="indent-8" innerHTML={description()} />
    </div>
  );
}