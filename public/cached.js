const cacheName = "v1"
const cacheAssets = [
    "/",
    "/codeflake.png",
    "/codeflakebg.jpg",
    "/codeflakelogo.png",
    "/bintranslator",
    "/manifest.json",
    "sw.js"
]
self.addEventListener('install', e => {
    console.log("sw installed")
    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            console.log("caching files")
            cache.addAll(cacheAssets)
        })
        .then(() => self.skipWaiting())
    )
})
self.addEventListener('activate', e => {
    console.log("sw activated")
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    )
})