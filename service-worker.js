const CACHE_NAME = "sa-apps-cache-v1";

const urlsToCache = [
"/",
"/index.html",
"/manifest.json",
"/kit.png",

"/b.html",
"/pt.html",
"/ps.html",
"/ls.html",
"/calcu.html",
"/percent-calculator.html",
"/math-solver-pro.html",
"/word-counter.html",
"/text-cleaner.html",
"/json-formatter.html",
"/hash-generator.html",
"/uuid-generator.html",
"/base64-tool.html",
"/regex-tester.html",
"/url-encoder.html",
"/u.html",
"/ascii.html",
"/s.html",
"/date-difference.html",
"/date-converter.html",
"/pomodoro.html",
"/age.html",
"/ac.html",
"/random.html",
"/morse.html",
"/random-picker.html",
"/qr.html",
"/todo.html",
"/notes.html",
"/typing-speed.html",
"/bmi.html",
"/bmr.html",
"/base-converter.html",
"/discount-calculator.html",
"/expense-splitter.html",
"/pg.html",
"/palette.html",
"/color-extractor.html",
"/gradient-generator.html",
"/img-opt.html",
"/chess.html",
"/tet.html",
"/ttt.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});
