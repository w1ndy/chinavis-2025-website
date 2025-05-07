import { Show } from "solid-js";

export function Page(props: { class?: string, title?: any, children?: any }) {
  return (
    <div class={`px-6 py-15 md:max-w-180 lg:max-w-240 xl:max-w-300 mx-auto [&_a]:text-sky-600 [&_a]:underline [&_a]:break-all ${props.class ?? ""}`}>
      <Show when={props.title}>
        <div class="text-xl sm:text-2xl mb-10 leading-8 sm:leading-9 text-center font-bold">
          {props.title}
        </div>
      </Show>
      <div class="space-y-10">
        {props.children}
      </div>
    </div>
  );
}