import { Show } from "solid-js";

export function Section(props: { class?: string, title?: string; children?: any }) {
  return (
    <div class={`max-w-300 mx-auto ${props.class ?? ""}`}>
      <Show when={props.title}>
        <h2>{props.title}</h2>
      </Show>
      <div class="text-justify font-light text-sm sm:text-base leading-7 indent-8 space-y-2 hyphens-auto">{props.children}</div>
    </div>
  )
}