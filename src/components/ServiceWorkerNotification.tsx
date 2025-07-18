import { createSignal, Show } from "solid-js";

export function ServiceWorkerNotification() {
  const [closed, setClosed] = createSignal(true);
  const [message, setMessage] = createSignal("已离线。");

  navigator.serviceWorker.addEventListener('message', event => {
    const { type } = event.data;

    if (type === 'OFFLINE_STATUS') {
      setMessage('您已离线');
      setClosed(false);
    }
  });

  return (
    <Show when={!closed()}>
      <div class="fixed bottom-10 right-1/2 translate-x-1/2 py-2 px-3 opacity-90 rounded border border-primary-darker bg-white text-sm">
        <span>{message()}</span>
        <button class="inline-block ml-2 w-4 h-4 rounded-full bg-gray-400 text-white text-xs cursor-pointer" onClick={() => setClosed(true)}>✕</button>
      </div>
    </Show>
  );
}
