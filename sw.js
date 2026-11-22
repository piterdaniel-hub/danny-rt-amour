const CACHE_NAME = 'danny-rt-amour-v2'; // Version 2 (mise à jour)
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './404.html' // Nouveau fichier ajouté pour le mode hors-ligne
];

// Installation du Service Worker (mise en cache)
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Interception des requêtes (fonctionnement hors-ligne)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
