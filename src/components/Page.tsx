import { Show } from "solid-js";
import "./Page.css";

export function Page(props: { class?: string, title?: any, children?: any }) {
  return (
    <div class={`page px-6 pt-15 pb-20 md:max-w-180 lg:max-w-240 xl:max-w-300 mx-auto [&_a]:text-sky-600 [&_a]:underline [&_a]:break-all ${props.class ?? ""}`}>
      <Show when={props.title}>
        <div class="text-xl sm:text-3xl mb-10 leading-9 sm:leading-11 text-center font-bold">
          {props.title}
        </div>
      </Show>
      <div class="space-y-10">
        {props.children}
      </div>
    </div>
  );
}