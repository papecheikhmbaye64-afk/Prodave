// ╔═══════════════════════════════════════╗
// ║   PRODAVE — Service Worker v1.0       ║
// ╚═══════════════════════════════════════╝
const CACHE = 'prodave-v1';
const PRECACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800;900&display=swap'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(c => c.addAll(PRECACHE.map(url => {
            return new Request(url, { mode: url.startsWith('http') ? 'no-cors' : 'same-origin' });
        })).catch(() => {})).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.filter(k => k !== CACHE).map(k => caches.delete(k))
        )).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', e => {
    // Navigation: serve index.html
    if (e.request.mode === 'navigate') {
        e.respondWith(
            fetch(e.request).catch(() =>
                caches.match('/index.html')
            )
        );
        return;
    }

    // Cache-first for static assets
    e.respondWith(
        caches.match(e.request).then(cached => {
            if (cached) return cached;
            return fetch(e.request).then(response => {
                if (response && response.status === 200 && e.request.method === 'GET') {
                    const clone = response.clone();
                    caches.open(CACHE).then(c => c.put(e.request, clone));
                }
                return response;
            }).catch(() => caches.match('/index.html'));
        })
    );
});
