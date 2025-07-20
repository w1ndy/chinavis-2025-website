const CACHE_NAME = "chinavis-2025-cache-v4";

const urlsToCache = [
  "/2025/",
  "/2025/zh/",
  "/2025/en/",
  "/2025/zh/registration/",
  "/2025/en/registration/",
  "/2025/zh/callforpaper/",
  "/2025/en/callforpaper/",
  "/2025/zh/venue/",
  "/2025/en/venue/",
  "/2025/zh/challenge/",
  "/2025/en/challenge/",
  "/2025/zh/volunteer/",
  "/2025/en/volunteer/",
  "/2025/zh/doctoralcolloquium/",
  "/2025/en/doctoralcolloquium/",
  "/2025/zh/committee/",
  "/2025/en/committee/",
  "/2025/zh/poster/",
  "/2025/en/poster/",
  "/2025/zh/callforposter/",
  "/2025/en/callforposter/",
  "/2025/zh/specialtopic/",
  "/2025/en/specialtopic/",
  "/2025/zh/exhibition/",
  "/2025/en/exhibition/",
  "/2025/zh/sponsor/",
  "/2025/en/sponsor/",
  "/2025/zh/cjkworkshop/",
  "/2025/en/cjkworkshop/",
  "/2025/zh/course/",
  "/2025/en/course/",
  "/2025/zh/program/",
  "/2025/en/program/",
  "/2025/zh/keynote/1/",
  "/2025/en/keynote/1/",
  "/2025/zh/keynote/2/",
  "/2025/en/keynote/2/",
  "/2025/zh/keynote/3/",
  "/2025/en/keynote/3/",
  "/2025/zh/panel/1/",
  "/2025/en/panel/1/",
  "/2025/zh/panel/2/",
  "/2025/en/panel/2/",
  "/2025/zh/panel/3/",
  "/2025/en/panel/3/",
  "/2025/zh/topic/1/",
  "/2025/en/topic/1/",
  "/2025/zh/topic/2/",
  "/2025/en/topic/2/",
  "/2025/zh/topic/3/",
  "/2025/en/topic/3/",
  "/2025/zh/topic/4/",
  "/2025/en/topic/4/",
  "/2025/zh/topic/5/",
  "/2025/en/topic/5/",
  "/2025/zh/topic/6/",
  "/2025/en/topic/6/",
  "/2025/zh/topic/7/",
  "/2025/en/topic/7/",
  "/2025/zh/topic/8/",
  "/2025/en/topic/8/",
  "/2025/zh/topic/9/",
  "/2025/en/topic/9/",
  "/2025/zh/topic/10/",
  "/2025/en/topic/10/",
  "/2025/zh/topic/11/",
  "/2025/en/topic/11/",
  "/2025/zh/topic/12/",
  "/2025/en/topic/12/",
  "/2025/zh/topic/13/",
  "/2025/en/topic/13/",
  "/2025/zh/paper/",
  "/2025/en/paper/",
  "/2025/zh/paper/1/",
  "/2025/en/paper/1/",
  "/2025/zh/paper/2/",
  "/2025/en/paper/2/",
  "/2025/zh/paper/3/",
  "/2025/en/paper/3/",
  "/2025/zh/paper/4/",
  "/2025/en/paper/4/",
  "/2025/zh/paper/5/",
  "/2025/en/paper/5/",
  "/2025/zh/paper/6/",
  "/2025/en/paper/6/",
  "/2025/zh/activity/arts/",
  "/2025/en/activity/arts/",
  "/2025/zh/activity/industry/",
  "/2025/en/activity/industry/",
];

let offline = false;

// Install: Cache files
self.addEventListener("install", async (event) => {
  self.skipWaiting();
  const cache = await caches.open(CACHE_NAME);
  for (const url of urlsToCache) {
    try {
      await cache.add(url);
    } catch (e) {
      console.warn("Skip", url, "due to error:", e);
    }
  }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  if (
    event.request.method !== "GET" ||
    !event.request.url.startsWith(self.location.origin) ||
    event.request.url.includes("favicon.ico")
  ) {
    return;
  }

  const request = (() => {
    if (event.request.mode === "navigate") {
      const url = new URL(event.request.url);
      if (!url.pathname.endsWith("/")) {
        // add the slash
        url.pathname += "/";
        return new Request(url, event.request);
      }
    }
    return event.request;
  })();

  const fetchAndUpdate = async () => {
    const cache = await caches.open(CACHE_NAME);

    try {
      // Force the network fetch to *follow* redirects
      const modifiedRequest = new Request(request, { redirect: "follow" });
      let response = await fetch(modifiedRequest);

      if (response.redirected) {
        const body = await response.clone().blob();
        response = new Response(body, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        });
      }

      // Only cache real, same‑origin, non‑redirect responses
      if (response.ok && response.type === "basic") {
        if (offline) {
          offline = false;
          self.clients.matchAll().then((clients) => {
            for (const client of clients) {
              client.postMessage({ type: "ALIVE" });
            }
          });
        }

        const cached = await cache.match(modifiedRequest);
        if (cached) {
          const clone = response.clone();
          if ((await clone.text()) !== (await cached.text())) {
            self.clients.matchAll().then((clients) => {
              for (const client of clients) {
                client.postMessage({
                  type: "UPDATE",
                });
              }
            });
          }
        }
        cache.put(modifiedRequest, response.clone());
      }

      return response;
    } catch (error) {
      offline = true;
      self.clients.matchAll().then((clients) => {
        for (const client of clients) {
          client.postMessage({ type: "DEAD" });
        }
      });
      return new Response("暂时无法连接到服务器。\n错误：" + error.message, {
        status: 503,
        statusText: "Service Unavailable",
      });
    }
  };

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(event.request);
      if (cached) {
        event.waitUntil(fetchAndUpdate()); // revalidate in background
        return cached; // stale‑while‑revalidate
      }
      return fetchAndUpdate(); // no cache → go network
    })
  );
});
