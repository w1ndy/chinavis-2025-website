import { useParams } from "@solidjs/router";
import { createMemo } from "solid-js";
import { program } from "~/i18n/program";
import { useTranslation } from "~/locale";

export function useSessionInfo(prefix: string) {
  const session = createMemo(() => {
    const id = `${prefix}-${useParams().id}`;
    for (const day of program) {
      for (const timeslot of day.timeslots) {
        for (const session of timeslot.sessions) {
          if (session.id === id) {
            return {
              date: day.date,
              time: timeslot.time,
              session,
            };
          }
        }
      }
    }
    return undefined;
  });

  return {
    session,
    title: session() ? useTranslation(session()!.session.title) : undefined,
    date: session() ? useTranslation(session()!.date) : undefined,
    time: session() ? session()!.time : undefined,
    location:
      session() && session()!.session.location
        ? useTranslation(session()!.session.location!)
        : undefined,
    description:
      session() && session()!.session.description
        ? useTranslation(session()!.session.description!)
        : undefined,
  };
}
