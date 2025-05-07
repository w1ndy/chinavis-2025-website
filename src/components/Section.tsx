import { Show } from "solid-js";

export function Section(props: { class?: string, title?: string; children?: any }) {
  return (
    <div class={`max-w-300 mx-auto ${props.class ?? ""}`}>
      <Show when={props.title}>
        <div class="text-xl sm:text-2xl pl-5 sm:pl-6 mb-4 uppercase font-bold relative before:content-[''] before:absolute before:w-2 before:h-full before:left-0 before:bg-sky-600">{props.title}</div>
      </Show>
      <div class="text-justify font-light text-sm sm:text-base leading-7 indent-8 space-y-2 hyphens-auto">{props.children}</div>
    </div>
  )
}