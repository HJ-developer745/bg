// Offline app shell: network first, falls back to cache.
// Videos are NEVER touched here (they stream directly; downloaded ones live in IndexedDB).
const C='goi-v2';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','style.css','script.js'])))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin||r.headers.has('range')||/\.(mp4|webm|mov|m4v)$/i.test(u.pathname))return;
  e.respondWith(fetch(r).then(res=>{if(res.ok){const x=res.clone();caches.open(C).then(c=>c.put(r,x))}return res}).catch(()=>caches.match(r)))});
