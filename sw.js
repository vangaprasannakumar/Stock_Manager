// A simple service worker just to satisfy the PWA install requirement
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // Pass-through fetch (We aren't aggressively caching right now because the data is real-time via Apps Script)
    e.respondWith(fetch(e.request));
});
