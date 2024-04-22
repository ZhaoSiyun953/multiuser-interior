
// ZIM Zapps PWA Service Worker to cache app files
// Please check to see all files have been listed with local links
// (Do not worry about icon files) 

var cacheName = 'zim_pwa_multiuser_interior';
var filesToCache = [
  './',
  'index.html',
  'assets/wall1.png',
  'assets/wall2.png',
  'assets/wall3.png',
  'assets/wallart1.png',
  'assets/wallart2.png',
  'assets/wallart3.png',
  'assets/floor1.png',
  'assets/floor2.png',
  'assets/floor3.png',
  'assets/curtain1.png',
  'assets/curtain2.png',
  'assets/curtain3.png',
  'assets/lamp1.png',
  'assets/lam2.png',
  'assets/lamp3.png',
  'assets/sofa1.png',
  'assets/sofa2.png',
  'assets/sofa3.png',
  'assets/'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});