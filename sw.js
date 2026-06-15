self.addEventListener('install', event => {
  self.skipWaiting();
  console.log('Service Worker installed');
});

self.addEventListener('fetch', event => {
  // فقط برای اینکه مرورگر تشخیص دهد SW وجود دارد
  event.respondWith(fetch(event.request));
});
