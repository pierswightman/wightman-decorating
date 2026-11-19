const CACHE='wightman-v11-aramis-doc-headings';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.json','./wightman-aramis-inspired-wordmark.jpg','./wightman-flyer.png','./LobsterTwo-Regular.otf']))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
