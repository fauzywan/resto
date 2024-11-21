(()=>{"use strict";var n,e={530:(n,e,t)=>{t(452);var a="RestaurantCatalogue-V1",r=["./","./icons/icon-32x32.png","./icons/icon-64x64.png","./icons/icon-128x128.png","./icons/icon-256x256.png","./icons/icon-512x512.png","./heros/hero-image_4.jpg","./index.html","./favicon.png","./app.bundle.js","./app.webmanifest","./sw.bundle.js"];self.addEventListener("install",(function(n){n.waitUntil(caches.open(a).then((function(n){return n.addAll(r)})))})),self.addEventListener("activate",(function(n){n.waitUntil(caches.keys().then((function(n){return Promise.all(n.map((function(n){return n!==a?caches.delete(n):null})))})))})),self.addEventListener("fetch",(function(n){var e=n.request,t=new URL(e.url);"GET"!==e.method||e.url.startsWith("chrome-extension")||("https://restaurant-api.dicoding.dev"!==t.origin?n.respondWith(caches.match(e).then((function(n){return n||fetch(e).then((function(n){var t=n.clone();return caches.open(a).then((function(n){n.put(e,t)})),n})).catch((function(){return"navigate"===e.mode?caches.match("./"):null}))}))):n.respondWith(caches.match(e).then((function(n){return n?(fetch(e).then((function(n){caches.open(a).then((function(t){t.put(e,n)}))})).catch(console.log),n):fetch(e).then((function(n){var t=n.clone();return caches.open(a).then((function(n){n.put(e,t)})),n})).catch((function(){return new Response(JSON.stringify({message:"No cached data available",restaurants:[]}),{status:200,headers:{"Content-Type":"application/json"}})}))}))))}))}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,a),c.exports}a.m=e,n=[],a.O=(e,t,r,c)=>{if(!t){var o=1/0;for(h=0;h<n.length;h++){for(var[t,r,c]=n[h],i=!0,s=0;s<t.length;s++)(!1&c||o>=c)&&Object.keys(a.O).every((n=>a.O[n](t[s])))?t.splice(s--,1):(i=!1,c<o&&(o=c));if(i){n.splice(h--,1);var u=r();void 0!==u&&(e=u)}}return e}c=c||0;for(var h=n.length;h>0&&n[h-1][2]>c;h--)n[h]=n[h-1];n[h]=[t,r,c]},a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n={725:0};a.O.j=e=>0===n[e];var e=(e,t)=>{var r,c,[o,i,s]=t,u=0;if(o.some((e=>0!==n[e]))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(s)var h=s(a)}for(e&&e(t);u<o.length;u++)c=o[u],a.o(n,c)&&n[c]&&n[c][0](),n[c]=0;return a.O(h)},t=self.webpackChunkRestaurant_Nusantara=self.webpackChunkRestaurant_Nusantara||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var r=a.O(void 0,[452],(()=>a(530)));r=a.O(r)})();
//# sourceMappingURL=sw.bundle.js.map