"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Chisnits/chisnits.github.io/neighborhood/index.html","1209d54152f23d142db2470245099cb8"],["/Chisnits/chisnits.github.io/neighborhood/static/css/main.a386cfd5.css","ec6749c9cbd814f1f519171f4075fb08"],["/Chisnits/chisnits.github.io/neighborhood/static/js/main.6170ff21.js","951febaff8aef4ecf3aac801a11c3eae"],["/Chisnits/chisnits.github.io/neighborhood/static/media/clubhouse.e39f34b0.JPG","e39f34b05a20d323b72a5491c3e2986a"],["/Chisnits/chisnits.github.io/neighborhood/static/media/entrance.d6cef418.JPG","d6cef4186234469f43d67493d4e7648b"],["/Chisnits/chisnits.github.io/neighborhood/static/media/streetsign.0774a079.JPG","0774a079e02ccac0d9f39332bfff6baa"],["/Chisnits/chisnits.github.io/neighborhood/static/media/streetview.016203bd.JPG","016203bd76d5c483f115f3f0c327fcf0"],["/Chisnits/chisnits.github.io/neighborhood/static/media/sunset.342c51bd.JPG","342c51bdf81d42345f8fee53b0b83f7b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var i=new URL(e);return r&&i.pathname.match(r)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),i=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));var r="/Chisnits/chisnits.github.io/neighborhood/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});