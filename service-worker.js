const CACHE_NAME = 'liquid-music-player-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // External libraries used by your app
  'https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.5/jsmediatags.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap',
  // Your app icons
  '/images/icon-192x192.png',
  '/images/icon-512x512.png'
];

// Install the service worker and cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Serve cached files when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // If not in cache, fetch from network
        return fetch(event.request);
      })
  );
});