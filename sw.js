// Service Worker con estrategia Network-First para index.html para evitar que la página quede congelada en caché
const CACHE_NAME = 'tele-mama-v11';
const ASSETS = [
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  // Ignorar streams de video (.m3u8, .ts, etc.), proxy y recursos externos
  if (e.request.url.includes('.m3u8') || e.request.url.includes('.ts') || e.request.url.includes('jsdelivr') || e.request.url.includes('workers.dev') || e.request.url.includes('lambda-url')) {
    return;
  }

  // Si es la página principal (HTML), SIEMPRE buscar en la red sin caché
  if (e.request.mode === 'navigate' || e.request.destination === 'document' || e.request.url.endsWith('index.html') || e.request.url.endsWith('/')) {
    e.respondWith(
      fetch(e.request)
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
