(function(e){function t(t){for(var a,r,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={1:0},o={1:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{2:"b9353901",3:"d4e7a47e",4:"15a9cb23"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={2:1,3:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{2:"2e1bd633",3:"01b399c7",4:"31d6cfe0"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],d=u.getAttribute("data-href");if(d===a||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],l.parentNode.removeChild(l),n(i)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var f=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var l=d;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getSquadron",(function(){return C})),n.d(a,"getUpgrades",(function(){return P})),n.d(a,"getConfigurations",(function(){return O}));var r={};n.r(r),n.d(r,"updateSquadron",(function(){return j}));var o={};n.r(o),n.d(o,"getSquadron",(function(){return L}));var i={};n.r(i),n.d(i,"getLanguages",(function(){return U})),n.d(i,"getStatistic",(function(){return N})),n.d(i,"getDoubleCardData",(function(){return D}));var s={};n.r(s),n.d(s,"updateMetadata",(function(){return V}));var c={};n.r(c),n.d(c,"getMetadata",(function(){return $}));n("5319");var u=n("c973"),d=n.n(u),f=(n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),l=n("1f91"),p=n("42d2"),g=n("b05d");f["a"].use(g["a"],{config:{},lang:l["a"],iconSet:p["a"]});var m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},h=[],b={name:"App"},y=b,v=n("2877"),_=Object(v["a"])(y,m,h,!1,null,null,null),w=_.exports,q=n("2f62"),S=function(){return{squadron:null}};const A=18;function C(e){return e.squadron}function P(e){return t=>e.squadron.deck[t].slots.filter(e=>!e.upgrade_types.includes(A))}function O(e){return t=>e.squadron.deck[t].slots.filter(e=>e.upgrade_types.includes(A))}function j(e,t){e.squadron=t}var x=n("bc3a"),B=n.n(x);function k(e,t){void 0===t&&(t="en");const n={headers:{"accept-language":t}};return B.a.get("https://squadbuilder.fantasyflightgames.com/api/squads/"+e,n)}function E(){return B.a.get("https://squadbuilder.fantasyflightgames.com/api/app-metadata/")}function L(e,t){k(t.id,t.language).then(t=>{e.commit("updateSquadron",t.data)}).catch(e=>{console.log(e)})}var M={namespaced:!0,state:S,getters:a,mutations:r,actions:o},T=function(){return{metadata:null,doubleCards:[{sideA:{id:331,image:"https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107.png"},sideB:{id:332,image:"https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107b.png"}},{sideA:{id:333,image:"https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108.png"},sideB:{id:334,image:"https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108b.png"}},{sideA:{id:486,image:"https://sb-cdn.fantasyflightgames.com/card_images/en/e3b44142faf0f13e541bf674a6c06dbc.png"},sideB:{id:487,image:"https://sb-cdn.fantasyflightgames.com/card_images/en/49372b4efb974ff673a1b79441186fd5.png"}},{sideA:{id:535,image:"https://sb-cdn.fantasyflightgames.com/card_images/en/be82da17cfd39003fda380bead210eb9.png"},sideB:{id:555,image:"https://sb-cdn.fantasyflightgames.com/card_images/en/ca74271f47c42b390ca0ba0b389144a5.png"}},{sideA:{id:594,image:"https://sb-cdn.fantasyflightgames.com/card_images/en/c23a0130bad7330c0abb6218745910aa.png"},sideB:{id:595,image:"https://sb-cdn.fantasyflightgames.com/card_images/en/aba79159308e850b635f6c43721ccdee.png"}},{sideA:{id:645,image:"https://sb-cdn.fantasyflightgames.com/card_images/en/f03c2baf5b0a095e28948f03468cc5d2.png"},sideB:{id:646,image:"https://sb-cdn.fantasyflightgames.com/card_images/en/77f37d94be3977d6d573219dd6462c2b.png"}}]}};function U(e){let t=[];return e.metadata&&(t=e.metadata.supported_languages.map(e=>e.id)),t}function N(e){return t=>{let n={};return e.metadata&&(n=e.metadata.card_stats.find(e=>e.id===t)),n}}function D(e){return t=>e.doubleCards.find(e=>e.sideA.id===t||e.sideB.id===t)}function V(e,t){e.metadata=t}function $(e){E().then(t=>{e.commit("updateMetadata",t.data)}).catch(e=>{console.log(e)})}var J={namespaced:!0,state:T,getters:i,mutations:s,actions:c};f["a"].use(q["a"]);var F=function(){const e=new q["a"].Store({modules:{currentSquadron:M,metadata:J},strict:!1});return e},H=n("8c4f");n("e6cf");const I=[{path:"/",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"996e"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"e51e"))}];var K=I;f["a"].use(H["a"]);var Q=function(){const e=new H["a"]({scrollBehavior:()=>({x:0,y:0}),routes:K,mode:"hash",base:""});return e},z=function(){return G.apply(this,arguments)};function G(){return G=d()((function*(){const e="function"===typeof F?yield F({Vue:f["a"]}):F,t="function"===typeof Q?yield Q({Vue:f["a"],store:e}):Q;e.$router=t;const n={router:t,store:e,render:e=>e(w),el:"#q-app"};return{app:n,store:e,router:t}})),G.apply(this,arguments)}var R=n("a925"),W={failed:"Action failed",success:"Action was successful"},X={"en-us":W};f["a"].use(R["a"]);const Y=new R["a"]({locale:"en-us",fallbackLocale:"en-us",messages:X});var Z=({app:e})=>{e.i18n=Y};f["a"].prototype.$axios=B.a;const ee="";function te(){return ne.apply(this,arguments)}function ne(){return ne=d()((function*(){const{app:e,store:t,router:n}=yield z();let a=!1;const r=e=>{a=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},o=window.location.href.replace(window.location.origin,""),i=[Z,void 0];for(let c=0;!1===a&&c<i.length;c++)if("function"===typeof i[c])try{yield i[c]({app:e,router:n,store:t,Vue:f["a"],ssrContext:null,redirect:r,urlPath:o,publicPath:ee})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==a&&new f["a"](e)})),ne.apply(this,arguments)}te()},"31cd":function(e,t,n){}});