 /*const staticDevCoffee = "dev-coffee-site-v1";

 self.addEventListener("install", installEvent => {
   console.log(installEvent);
   installEvent.waitUntil(
     caches.open(staticDevCoffee).then(cache => {cache.addAll(assets);}).catch(console.log) );});

self.addEventListener("fetch", event => { console.log(event.request);
event.respondWith(
caches.match(event.request).then(res => { return res || fetch(event.request);}).catch(console.log) ); }); */
