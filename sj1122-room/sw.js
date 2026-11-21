/* 성준이 공부방 - 오프라인 대비 서비스 워커 */
var CACHE = 'sungjun-study-v10';
var ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './data/day01.js', './data/day02.js', './data/day03.js', './data/day04.js', './data/day05.js',
  './data/day06.js', './data/day07.js', './data/day08.js', './data/day09.js', './data/day10.js',
  './data/day11.js', './data/day12.js', './data/day13.js', './data/day14.js', './data/day15.js',
  './data/day16.js', './data/day17.js', './data/day18.js', './data/day19.js', './data/day20.js',
  './data/day21.js', './data/day22.js', './data/day23.js', './data/day24.js', './data/day25.js',
  './data/day26.js', './data/day27.js', './data/day28.js', './data/day29.js', './data/day30.js'
];

var INDEX = './index.html';

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return c.addAll(ASSETS).catch(function () { /* 일부 실패해도 설치 진행 */ });
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(INDEX, copy); });
        return res;
      }).catch(function () { return caches.match(INDEX); })
    );
    return;
  }

  e.respondWith(
    fetch(req).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(req, copy); });
      return res;
    }).catch(function () { return caches.match(req); })
  );
});
