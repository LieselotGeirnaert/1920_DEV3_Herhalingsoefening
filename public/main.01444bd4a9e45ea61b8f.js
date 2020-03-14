!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!w[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--v&&0===b&&x()}(e,n),t&&t(e,n)};var n,r=!0,o="01444bd4a9e45ea61b8f",a=1e4,i={},c=[],d=[];function s(e){var t=j[e];if(!t)return L;var r=function(r){return t.hot.active?(j[r]?-1===j[r].parents.indexOf(e)&&j[r].parents.push(e):(c=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),L(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return L[e]},set:function(t){L[e]=t}}};for(var a in L)Object.prototype.hasOwnProperty.call(L,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,o(a));return r.e=function(e){return"ready"===u&&f("prepare"),b++,L.e(e).then(t,(function(e){throw t(),e}));function t(){b--,"prepare"===u&&(g[e]||k(e),0===b&&0===v&&x())}},r.t=function(e,t){return 1&t&&(e=r(e)),L.t(e,-2&t)},r}function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:E,apply:D,status:function(e){if(!e)return u;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:i[e]};return n=void 0,t}var p=[],u="idle";function f(e){u=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var m,h,y,v=0,b=0,g={},_={},w={};function O(e){return+e+""===e?+e:e}function E(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(t=a,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=L.p+""+o+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;_={},g={},w=e.c,y=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));h={};return k(0),"prepare"===u&&0===b&&0===v&&x(),t}));var t}function k(e){w[e]?(_[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=L.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function x(){f("ready");var e=m;if(m=null,e)if(r)Promise.resolve().then((function(){return D(r)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(O(n));e.resolve(t)}}function D(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,r,a,d,s;function l(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),a=o.id,i=o.chain;if((d=j[a])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(d.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var c=0;c<d.parents.length;c++){var s=d.parents[c],l=j[s];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([s]),moduleId:a,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[a]?(n[s]||(n[s]=[]),p(n[s],[a])):(delete n[s],t.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},v=[],b={},g=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var _ in h)if(Object.prototype.hasOwnProperty.call(h,_)){var E;s=O(_);var k=!1,x=!1,D=!1,S="";switch((E=h[_]?l(s):{type:"disposed",moduleId:_}).chain&&(S="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(k=new Error("Aborted because of self decline: "+E.moduleId+S));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+S));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(k=new Error("Aborted because "+s+" is not accepted"+S));break;case"accepted":t.onAccepted&&t.onAccepted(E),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),D=!0;break;default:throw new Error("Unexception type "+E.type)}if(k)return f("abort"),Promise.reject(k);if(x)for(s in b[s]=h[s],p(v,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,s)&&(m[s]||(m[s]=[]),p(m[s],E.outdatedDependencies[s]));D&&(p(v,[E.moduleId]),b[s]=g)}var H,P=[];for(r=0;r<v.length;r++)s=v[r],j[s]&&j[s].hot._selfAccepted&&b[s]!==g&&P.push({module:s,errorHandler:j[s].hot._selfAccepted});f("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)}));for(var M,I,A=v.slice();A.length>0;)if(s=A.pop(),d=j[s]){var q={},C=d.hot._disposeHandlers;for(a=0;a<C.length;a++)(n=C[a])(q);for(i[s]=q,d.hot.active=!1,delete j[s],delete m[s],a=0;a<d.children.length;a++){var T=j[d.children[a]];T&&((H=T.parents.indexOf(s))>=0&&T.parents.splice(H,1))}}for(s in m)if(Object.prototype.hasOwnProperty.call(m,s)&&(d=j[s]))for(I=m[s],a=0;a<I.length;a++)M=I[a],(H=d.children.indexOf(M))>=0&&d.children.splice(H,1);for(s in f("apply"),o=y,b)Object.prototype.hasOwnProperty.call(b,s)&&(e[s]=b[s]);var U=null;for(s in m)if(Object.prototype.hasOwnProperty.call(m,s)&&(d=j[s])){I=m[s];var $=[];for(r=0;r<I.length;r++)if(M=I[r],n=d.hot._acceptedDependencies[M]){if(-1!==$.indexOf(n))continue;$.push(n)}for(r=0;r<$.length;r++){n=$[r];try{n(I)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:I[r],error:e}),t.ignoreErrored||U||(U=e)}}}for(r=0;r<P.length;r++){var N=P[r];s=N.module,c=[s];try{L(s)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||U||(U=n),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||U||(U=e)}}return U?(f("fail"),Promise.reject(U)):(f("idle"),new Promise((function(e){e(v)})))}var j={};function L(t){if(j[t])return j[t].exports;var n=j[t]={i:t,l:!1,exports:{},hot:l(t),parents:(d=c,c=[],d),children:[]};return e[t].call(n.exports,n,n.exports,s(t)),n.l=!0,n.exports}L.m=e,L.c=j,L.d=function(e,t,n){L.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},L.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},L.t=function(e,t){if(1&t&&(e=L(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(L.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)L.d(n,r,function(t){return e[t]}.bind(null,r));return n},L.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return L.d(t,"a",t),t},L.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},L.p="",L.h=function(){return o},s(1)(L.s=1)}([function(e){e.exports=JSON.parse('{"coffees":[{"id":1,"name":"Oat Latte","plantbased":true,"description":"Latte coffee with oat plant milk.","prices":{"small":2.5,"medium":3.5,"large":4.5,"extra_large":5.5}},{"id":8,"name":"Toasted Graham Latte ","plantbased":false,"description":"Graham and sweet cream meet steamed milk and our signature espresso, then are finished off with a sprinkling of cinnamon graham crumbles for a less sweet perfect treat.","shop":"Starbucks","prices":{"small":4.25,"medium":4.95,"large":5.95,"extra_large":null}},{"id":2,"name":"Soy Latte","plantbased":true,"description":"Latte coffee with soy plant milk.","prices":{"small":1.5,"medium":2,"large":3.5,"extra_large":4.5}},{"id":3,"name":"Rice Latte","plantbased":true,"description":"Latte coffee with rice plant milk.","prices":{"small":2.5,"medium":3.5,"large":4.5,"extra_large":5.5}},{"id":4,"name":"Koko Latte","plantbased":true,"description":"Latte coffee with coconut milk.","prices":{"small":1.5,"medium":2,"large":3.5,"extra_large":4.5}},{"id":5,"name":"Almond Latte","plantbased":true,"description":"Latte coffee with almond milk.","prices":{"small":2.5,"medium":3.5,"large":4.5,"extra_large":5.5}},{"id":6,"name":"Pumpkin Spice Latte","plantbased":false,"description":"Our signature espresso and milk are highlighted by flavor notes of pumpkin, cinnamon, nutmeg and clove to create this incredible beverage that\'s a fall favorite. Enjoy it topped with whipped cream and real pumpkin pie spices.","shop":"Starbucks","prices":{"small":4.25,"medium":4.95,"large":5.95,"extra_large":null}},{"id":7,"name":"Salted Caramel Mocha","plantbased":false,"description":"Our signature espresso and milk are highlighted by flavor notes of pumpkin, cinnamon, nutmeg and clove to create this incredible beverage that\'s a fall favorite. Enjoy it topped with whipped cream and real pumpkin pie spices.","shop":"Starbucks","prices":{"small":4.25,"medium":4.95,"large":5.95,"extra_large":null}}]}')},function(e,t,n){"use strict";n.r(t);n(2);var r=n(0);{const e=[];let t=0;const n=e=>{const t=document.querySelector(".prices__list");e.coffees.forEach(e=>{if(!0===e.plantbased){const n=document.createElement("li");n.setAttribute("class","price"),n.dataset.id=e.id,n.innerHTML=`<a class="price__button">\n            <span class="price__button__wrapper">\n            <span class="price__button__name">${e.name}</span>\n            <span class="price__button__amount">&euro; ${e.prices.medium.toLocaleString("nl-BE",{minimumFractionDigits:2})}</span>\n            </span>\n            <span class="price__button__plus" data-id="${e.id}">+</span>\n          </a>`,t.appendChild(n)}})},o=n=>{const o=n.target.dataset.id;null==e[o]?e[o]=1:e[o]=e[o]+1,t+=1,i(e,r)},a=n=>{const o=n.target.dataset.id;1===e[o]?e[o]=null:e[o]=e[o]-1,t-=1,i(e,r)},i=(e,n)=>{const r=document.querySelector(".orders__wrapper"),o=document.querySelector(".emptystate"),i=document.querySelector(".orders"),c=document.querySelector(".total__price span");let d=0;for(;i.hasChildNodes();)i.removeChild(i.firstChild);if(t>0){r.classList.remove("hide"),o.classList.add("hide"),n.coffees.forEach(t=>{if(null!=e[t.id]){const n=document.createElement("li");n.setAttribute("class","order"),n.innerHTML=`<span class="order__name">\n              <span class="order__amount">${e[t.id]} x</span> ${t.name}\n            </span>\n            <span class="order__price">&euro; ${(t.prices.medium*e[t.id]).toLocaleString("nl-BE",{minimumFractionDigits:2})}</span>\n            <button class="remove" data-id="${t.id}">\n              x\n            </button>`,i.appendChild(n),d+=t.prices.medium*e[t.id]}});const t=document.getElementsByClassName("remove");for(let e=0;e<t.length;e++)t[e].addEventListener("click",a);c.innerHTML=d.toLocaleString("nl-BE",{minimumFractionDigits:2})}else r.classList.add("hide"),o.classList.remove("hide")};(()=>{n(r);const e=document.getElementsByClassName("price__button");for(let t=0;t<e.length;t++)e[t].addEventListener("click",o)})()}},function(e,t,n){}]);