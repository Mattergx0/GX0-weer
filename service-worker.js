self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("zero-weather-v1").then(cache =>
      cache.addAll([
        "./",
        "index.html",
        "styles.css",
        "script.js",
        "icon.png",
        "manifest.json"
      ])
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
