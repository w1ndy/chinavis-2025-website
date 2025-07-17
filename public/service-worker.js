const CACHE_NAME = "chinavis-2025-cache-v1";

self.addEventListener("install", (event) => {
  // Optionally skip waiting so it activates immediately
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Clean up old caches if needed
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(event.request);

      if (cachedResponse) {
        const dateHeader = cachedResponse.headers.get("sw-cache-time");
        if (dateHeader) {
          const cachedTime = new Date(dateHeader).getTime();
          const now = Date.now();
          if (now - cachedTime < EXPIRATION_TIME) {
            return cachedResponse;
          }
        }
      }

      // Fetch and store response with custom date header
      const networkResponse = await fetch(event.request);
      const responseToCache = networkResponse.clone();

      const headers = new Headers(responseToCache.headers);
      headers.set("sw-cache-time", new Date().toISOString());

      const newResponse = new Response(await responseToCache.blob(), {
        status: responseToCache.status,
        statusText: responseToCache.statusText,
        headers,
      });

      await cache.put(event.request, newResponse.clone());
      return newResponse;
    })
  );
});
