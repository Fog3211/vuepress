/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "695679c0c7faa48dc4bece97fc7a7833"
  },
  {
    "url": "assets/css/1.styles.babd7481.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.280bc6f1.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.bb8f7b0d.css",
    "revision": "1bf794d614c2c840cd180f94d1bece10"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.babd7481.js",
    "revision": "87b26c931f15723340e79b7706f16a71"
  },
  {
    "url": "assets/js/2.280bc6f1.js",
    "revision": "00b9d2c92af7c3412ffde73c1b6dd1a2"
  },
  {
    "url": "assets/js/3.64fdb871.js",
    "revision": "3920006c689fddae3ec7a3050751d79d"
  },
  {
    "url": "assets/js/4.001b29e5.js",
    "revision": "04c3e5fd599ead899984d83268451fb7"
  },
  {
    "url": "assets/js/5.fb483d92.js",
    "revision": "32186dbf789caf04f5789a335b0b8c9c"
  },
  {
    "url": "assets/js/6.e970b9f2.js",
    "revision": "27a0b2d840b4036017504734a0d3cf77"
  },
  {
    "url": "assets/js/7.8e0fc5be.js",
    "revision": "aad5800f9c7c4a058d69fa527f559e16"
  },
  {
    "url": "assets/js/8.e7989494.js",
    "revision": "7647885c5aa9887a3f456bf3cdd1db38"
  },
  {
    "url": "assets/js/9.1b5268dc.js",
    "revision": "30590618c09e3ed6cb28d0c15bbe498a"
  },
  {
    "url": "assets/js/app.bb8f7b0d.js",
    "revision": "18cadb808eb7cb3d367e3cbd27eec4ab"
  },
  {
    "url": "css/index.html",
    "revision": "7a52e4f4c83f4dbaf7b22511487e387f"
  },
  {
    "url": "head.jpg",
    "revision": "138b8b49a9a52ee37eccda2c28e0888d"
  },
  {
    "url": "index.html",
    "revision": "e00842a8ebd0a24936ee03722a13dea7"
  },
  {
    "url": "javascript/index.html",
    "revision": "54f3fb63460c34920c95cd31395df8d2"
  },
  {
    "url": "javascript/js-1.html",
    "revision": "cd06cdbe4827739615aa1508fada5e20"
  },
  {
    "url": "javascript/js-2.html",
    "revision": "a2ae779e53426c5c3089bd941796304a"
  },
  {
    "url": "resume/index.html",
    "revision": "5dc20c6f54541531a55c03a4f1fa3089"
  },
  {
    "url": "vue/index.html",
    "revision": "581892871dc6ee2028309a158865f69b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
