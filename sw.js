const CACHE_NAME = 'health-app-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  '[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)',
  '[https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js](https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js)'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
