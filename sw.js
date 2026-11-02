// Service Worker con estrategia Network-First para index.html para evitar que la página quede congelada en caché
const CACHE_NAME = 'tele-mama-v5';
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
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Ignorar completamente streams de video y fragmentos
  if (e.request.url.includes('.m3u8') || e.request.url.includes('.ts') || e.request.url.includes('youtube') || e.request.url.includes('googlevideo')) {
    return;
  }

  // Network-First para index.html y recursos: siempre busca la última versión de GitHub
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
