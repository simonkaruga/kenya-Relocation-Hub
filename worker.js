const CACHE_NAME = 'kenya-relocation-hub-v1';
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/styles.css',
  '/scripts.js',
  '/images/nairobi_optimized.webp'
];

// --- Service Worker (Offline Support) ---
self.addEventListener('install', (event) => {
  console.log('Service Worker: Install Event');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching Static Assets');
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .catch((error) => {
        console.error('Service Worker: Caching Failed', error);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activate Event');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting Old Cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
          .then((response) => {
            // Don't cache external resources
            if (!event.request.url.startsWith(self.location.origin)) {
              return response;
            }
            return caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, response.clone());
                return response;
              });
          })
          .catch(() => {
            // Return offline fallback for HTML pages
            if (event.request.destination === 'document') {
              return caches.match('/index.html');
            }
          });
      })
  );
});
