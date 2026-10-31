/* Sci Cal Admin — সব অনুরোধ সরাসরি নেটওয়ার্কে (অ্যাডমিনে সবসময় নতুন ডেটা দরকার) */
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { /* পাস-থ্রু */ });
