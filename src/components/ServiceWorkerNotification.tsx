import { createSignal, onMount, Show } from "solid-js";

export function ServiceWorkerNotification() {
  const [closed, setClosed] = createSignal(true);
  const [message, setMessage] = createSignal("");

  onMount(() => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener('message', event => {
        const { type } = event.data;

        if (type === 'DEAD') {
          setMessage('无法连接到服务器。');
          setClosed(false);
        } else if (type === 'ALIVE') {
          setClosed(true);
        } else if (type === 'UPDATE') {
          setMessage('有新版本可用，请刷新页面。');
          setClosed(false);
        }
      });
    }
  })

  return (
    <Show when={!closed()}>
      <div class="fixed bottom-10 right-1/2 translate-x-1/2 py-2 px-3 opacity-90 rounded border border-primary-darker bg-white dark:bg-black text-sm">
        <span>{message()}</span>
        <button class="inline-block ml-2 w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600 text-white text-xs cursor-pointer" onClick={() => setClosed(true)}>✕</button>
      </div>
    </Show>
  );
}
