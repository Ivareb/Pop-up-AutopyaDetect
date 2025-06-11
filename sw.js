const CACHE_NAME = 'autopaydetect-webinar-v1';
const urlsToCache = [
  './',
  './AutopayDetect_Popup.html',
  './manifest.json',
  './MAlin.jpg',
  './Valuta-norsk.png',
  './dyn-icon-24-calendar-add.png',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
