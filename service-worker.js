const CACHE_NAME = "sho-v1";

const urlsToCache = [
"/",
"index.html",
"players.html",
"alliances.html",
"legions.html",
"leadership.html",
"styles.css",
"players.js"
];

self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))
);
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request)
.then(response => response || fetch(event.request))
);
});
