import { createSignal, For, Show } from "solid-js";
import { Title } from "@solidjs/meta";

import { useTranslation, useTranslator } from "~/locale";
import * as Dict from "~/i18n/program";
import { Page } from "~/components/Page";
import { SpeakerInfo } from "~/components/SpeakerInfo";

import "./program.css"
import FloorPlan from "~/assets/program/floorplan.avif";

function ProgramTableTimeSlot(props: { timeslot: Dict.ProgramTimeSlot }) {
  return (
    <For each={props.timeslot.sessions}>
      {(session, index) => {
        const title = useTranslation(session.title);
        const location = session.location ? useTranslation(session.location) : undefined;
        const href = session.href ? useTranslation(session.href) : undefined;
        return (
          <tr>
            <Show when={index() == 0}>
              <td rowSpan={props.timeslot.sessions.length} class="text-center py-2">
                {props.timeslot.time}
              </td>
            </Show>
            <td>
              <div class="flex flex-col md:flex-row justify-between items-center py-2">
                <div class="flex-1">
                  <div class="font-bold text-center md:text-left">
                    <Show when={href} fallback={<span>{title()}</span>}>
                      <a href={href!()}>{title()}</a>
                    </Show>
                  </div>
                  <Show when={session.id && session.id.startsWith("keynote-")}>
                    <For each={session.speakers}>
                      {(speaker) => (
                        <SpeakerInfo class="justify-center md:justify-start" speaker={speaker} nameOnly={true} />
                      )}
                    </For>
                  </Show>
                </div>
                <Show when={session.location}>
                  <span class="md:ml-2 flex-none text-gray-500 dark:text-gray-300">{location!()} 📍</span>
                </Show>
              </div>
            </td>
          </tr>
        )
      }}
    </For>
  );
}

function ProgramTableDay(props: { day: Dict.ProgramDay }) {
  const date = useTranslation(props.day.date);
  return (
    <>
      <tr>
        <td colSpan={2} class="text-center font-semibold bg-gray-100 dark:bg-transparent py-1">
          {date()}
        </td>
      </tr>
      <For each={props.day.timeslots}>
        {(timeslot) => (
          <ProgramTableTimeSlot timeslot={timeslot} />
        )}
      </For>
    </>
  );
}

export default function Program() {
  const t = useTranslator(Dict);

  const [filter, setFilter] = createSignal<Dict.ProgramSessionType | "">("");
  const filteredProgram = () => {
    return Dict.program.map(day => ({
      ...day,
      timeslots: day.timeslots.map(timeslot => ({
        ...timeslot,
        sessions: timeslot.sessions.filter(session => filter() === "" || session.type === filter())
      })).filter(timeslot => timeslot.sessions.length > 0)
    })).filter(day => day.timeslots.length > 0);
  };

  return (
    <>
      <Title>{t("PageTitle")}</Title>
      <Page class="program" title={<span innerHTML={t("Title")}></span>}>
        <div class="text-center *:inline-block *:mr-3 *:mb-3 *:px-2 *:py-1 *:rounded *:w-22 *:text-center *:border *:border-primary-darker *:cursor-pointer *:hover:bg-gray-100 dark:*:hover:bg-gray-800 *:[.active]:bg-primary-darker *:[.active]:text-white">
          <div classList={{ "active": filter() === "keynote" }} onClick={() => filter() == "keynote" ? setFilter("") : setFilter("keynote")}>{t("Keynote")}</div>
          <div classList={{ "active": filter() === "panel" }} onClick={() => filter() == "panel" ? setFilter("") : setFilter("panel")}>{t("Panel")}</div>
          <div classList={{ "active": filter() === "workshop" }} onClick={() => filter() == "workshop" ? setFilter("") : setFilter("workshop")}>{t("Workshop")}</div>
          <div classList={{ "active": filter() === "topic" }} onClick={() => filter() == "topic" ? setFilter("") : setFilter("topic")}>{t("Topic")}</div>
          <div classList={{ "active": filter() === "paper" }} onClick={() => filter() == "paper" ? setFilter("") : setFilter("paper")}>{t("Paper")}</div>
          <div classList={{ "active": filter() === "course" }} onClick={() => filter() == "course" ? setFilter("") : setFilter("course")}>{t("Course")}</div>
          <div classList={{ "active": filter() === "challenge" }} onClick={() => filter() == "challenge" ? setFilter("") : setFilter("challenge")}>{t("Challenge")}</div>
          <div classList={{ "active": filter() === "exhibition" }} onClick={() => filter() == "exhibition" ? setFilter("") : setFilter("exhibition")}>{t("Exhibition")}</div>
          <div classList={{ "active": filter() === "activity" }} onClick={() => filter() == "activity" ? setFilter("") : setFilter("activity")}>{t("Activity")}</div>
        </div>
        <table class="my-2 border-t border-primary-darker w-full text-left">
          <thead class="text-center font-bold border-b bg-primary-darkest text-white">
            <tr>
              <th class="w-20 sm:w-28 md:w-36 lg:w-48 py-1">{t("Time")}</th>
              <th>{t("Session")}</th>
            </tr>
          </thead>
          <tbody>
            <For each={filteredProgram()}>
              {(day) => (
                <ProgramTableDay day={day} />
              )}
            </For>
          </tbody>
        </table>
        <img src={FloorPlan} alt="FloorPlan" class="w-full max-w-4xl mx-auto my-10" />
      </Page>
    </>
  );
}
