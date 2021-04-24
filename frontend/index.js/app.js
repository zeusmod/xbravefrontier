var e=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},t=m,n=s,o=function(e){return l(s(e))},i=l,a=h,r=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function s(e){for(var t,n=[],o=0,i=0,a="";null!=(t=r.exec(e));){var s=t[0],l=t[1],c=t.index;if(a+=e.slice(i,c),i=c+s.length,l)a+=l[1];else{a&&(n.push(a),a="");var u=t[2],p=t[3],h=t[4],m=t[5],f=t[6],g=t[7],v="+"===f||"*"===f,w="?"===f||"*"===f,y=u||"/",b=h||m||(g?".*":"[^"+y+"]+?");n.push({name:p||o++,prefix:u||"",delimiter:y,optional:w,repeat:v,pattern:d(b)})}}return i<e.length&&(a+=e.substr(i)),a&&n.push(a),n}function l(t){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(n[o]=new RegExp("^"+t[o].pattern+"$"));return function(o){for(var i="",a=o||{},r=0;r<t.length;r++){var s=t[r];if("string"!=typeof s){var l,c=a[s.name];if(null==c){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to be defined')}if(e(c)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received "'+c+'"');if(0===c.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(l=encodeURIComponent(c[d]),!n[r].test(l))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received "'+l+'"');i+=(0===d?s.prefix:s.delimiter)+l}}else{if(l=encodeURIComponent(c),!n[r].test(l))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+l+'"');i+=s.prefix+l}}else i+=s}return i}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function d(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function h(e,t){for(var n=(t=t||{}).strict,o=!1!==t.end,i="",a=e[e.length-1],r="string"==typeof a&&/\/$/.test(a),s=0;s<e.length;s++){var l=e[s];if("string"==typeof l)i+=c(l);else{var d=c(l.prefix),u=l.pattern;l.repeat&&(u+="(?:"+d+u+")*"),i+=u=l.optional?d?"(?:"+d+"("+u+"))?":"("+u+")?":d+"("+u+")"}}return n||(i=(r?i.slice(0,-2):i)+"(?:\\/(?=$))?"),i+=o?"$":n&&r?"":"(?=\\/|$)",new RegExp("^"+i,p(t))}function m(t,n,o){return e(n=n||[])?o||(o={}):(o=n,n=[]),t instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var o=0;o<n.length;o++)t.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return u(e,t)}(t,n):e(t)?function(e,t,n){for(var o=[],i=0;i<e.length;i++)o.push(m(e[i],t,n).source);return u(new RegExp("(?:"+o.join("|")+")",p(n)),t)}(t,n,o):function(e,t,n){for(var o=s(e),i=h(o,n),a=0;a<o.length;a++)"string"!=typeof o[a]&&t.push(o[a]);return u(i,t)}(t,n,o)}t.parse=n,t.compile=o,t.tokensToFunction=i,t.tokensToRegExp=a;var f,g="undefined"!=typeof document,v="undefined"!=typeof window,w="undefined"!=typeof history,y="undefined"!=typeof process,b=g&&document.ontouchstart?"touchstart":"click",x=v&&!(!window.history.location&&!window.location);function E(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function C(e,t){if("function"==typeof e)return C.call(this,"*",e);if("function"==typeof t)for(var n=new k(e,null,this),o=1;o<arguments.length;++o)this.callbacks.push(n.middleware(arguments[o]));else"string"==typeof e?this["string"==typeof t?"redirect":"show"](e,t):this.start(e)}function B(e){if(!e.handled){var t=this,n=t._window;(t._hashbang?x&&this._getBase()+n.location.hash.replace("#!",""):x&&n.location.pathname+n.location.search)!==e.canonicalPath&&(t.stop(),e.handled=!1,x&&(n.location.href=e.canonicalPath))}}function _(e,t,n){var o=this.page=n||C,i=o._window,a=o._hashbang,r=o._getBase();"/"===e[0]&&0!==e.indexOf(r)&&(e=r+(a?"#!":"")+e);var s=e.indexOf("?");this.canonicalPath=e;var l=new RegExp("^"+r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"));if(this.path=e.replace(l,"")||"/",a&&(this.path=this.path.replace("#!","")||"/"),this.title=g&&i.document.title,this.state=t||{},this.state.path=e,this.querystring=~s?o._decodeURLEncodedURIComponent(e.slice(s+1)):"",this.pathname=o._decodeURLEncodedURIComponent(~s?e.slice(0,s):e),this.params={},this.hash="",!a){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=o._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function k(e,n,o){var i=this.page=o||L,a=n||{};a.strict=a.strict||i._strict,this.path="*"===e?"(.*)":e,this.method="GET",this.regexp=t(this.path,this.keys=[],a)}E.prototype.configure=function(e){var t=e||{};this._window=t.window||v&&window,this._decodeURLComponents=!1!==t.decodeURLComponents,this._popstate=!1!==t.popstate&&v,this._click=!1!==t.click&&g,this._hashbang=!!t.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):v&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(b,this.clickHandler,!1):g&&n.document.removeEventListener(b,this.clickHandler,!1),this._hashbang&&v&&!w?n.addEventListener("hashchange",this._onpopstate,!1):v&&n.removeEventListener("hashchange",this._onpopstate,!1)},E.prototype.base=function(e){if(0===arguments.length)return this._base;this._base=e},E.prototype._getBase=function(){var e=this._base;if(e)return e;var t=v&&this._window&&this._window.location;return v&&this._hashbang&&t&&"file:"===t.protocol&&(e=t.pathname),e},E.prototype.strict=function(e){if(0===arguments.length)return this._strict;this._strict=e},E.prototype.start=function(e){var t=e||{};if(this.configure(t),!1!==t.dispatch){var n;if(this._running=!0,x){var o=this._window.location;n=this._hashbang&&~o.hash.indexOf("#!")?o.hash.substr(2)+o.search:this._hashbang?o.search+o.hash:o.pathname+o.search+o.hash}this.replace(n,null,!0,t.dispatch)}},E.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(b,this.clickHandler,!1),v&&e.removeEventListener("popstate",this._onpopstate,!1),v&&e.removeEventListener("hashchange",this._onpopstate,!1)}},E.prototype.show=function(e,t,n,o){var i=new _(e,t,this),a=this.prevContext;return this.prevContext=i,this.current=i.path,!1!==n&&this.dispatch(i,a),!1!==i.handled&&!1!==o&&i.pushState(),i},E.prototype.back=function(e,t){var n=this;if(this.len>0){var o=this._window;w&&o.history.back(),this.len--}else e?setTimeout((function(){n.show(e,t)})):setTimeout((function(){n.show(n._getBase(),t)}))},E.prototype.redirect=function(e,t){var n=this;"string"==typeof e&&"string"==typeof t&&C.call(this,e,(function(e){setTimeout((function(){n.replace(t)}),0)})),"string"==typeof e&&void 0===t&&setTimeout((function(){n.replace(e)}),0)},E.prototype.replace=function(e,t,n,o){var i=new _(e,t,this),a=this.prevContext;return this.prevContext=i,this.current=i.path,i.init=n,i.save(),!1!==o&&this.dispatch(i,a),i},E.prototype.dispatch=function(e,t){var n=0,o=0,i=this;function a(){var t=i.callbacks[n++];if(e.path===i.current)return t?void t(e,a):B.call(i,e);e.handled=!1}t?function e(){var n=i.exits[o++];if(!n)return a();n(t,e)}():a()},E.prototype.exit=function(e,t){if("function"==typeof e)return this.exit("*",e);for(var n=new k(e,null,this),o=1;o<arguments.length;++o)this.exits.push(n.middleware(arguments[o]))},E.prototype.clickHandler=function(e){if(1===this._which(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=e.target,n=e.path||(e.composedPath?e.composedPath():null);if(n)for(var o=0;o<n.length;o++)if(n[o].nodeName&&"A"===n[o].nodeName.toUpperCase()&&n[o].href){t=n[o];break}for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;if(t&&"A"===t.nodeName.toUpperCase()){var i="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name;if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")){var a=t.getAttribute("href");if((this._hashbang||!this._samePath(t)||!t.hash&&"#"!==a)&&!(a&&a.indexOf("mailto:")>-1)&&!(i?t.target.baseVal:t.target)&&(i||this.sameOrigin(t.href))){var r=i?t.href.baseVal:t.pathname+t.search+(t.hash||"");r="/"!==r[0]?"/"+r:r,y&&r.match(/^\/[a-zA-Z]:\//)&&(r=r.replace(/^\/[a-zA-Z]:\//,"/"));var s=r,l=this._getBase();0===r.indexOf(l)&&(r=r.substr(l.length)),this._hashbang&&(r=r.replace("#!","")),(!l||s!==r||x&&"file:"===this._window.location.protocol)&&(e.preventDefault(),this.show(s))}}}}},E.prototype._onpopstate=(f=!1,v?(g&&"complete"===document.readyState?f=!0:window.addEventListener("load",(function(){setTimeout((function(){f=!0}),0)})),function(e){if(f){var t=this;if(e.state){var n=e.state.path;t.replace(n,e.state)}else if(x){var o=t._window.location;t.show(o.pathname+o.search+o.hash,void 0,void 0,!1)}}}):function(){}),E.prototype._which=function(e){return null==(e=e||v&&this._window.event).which?e.button:e.which},E.prototype._toURL=function(e){var t=this._window;if("function"==typeof URL&&x)return new URL(e,t.location.toString());if(g){var n=t.document.createElement("a");return n.href=e,n}},E.prototype.sameOrigin=function(e){if(!e||!x)return!1;var t=this._toURL(e),n=this._window.location;return n.protocol===t.protocol&&n.hostname===t.hostname&&(n.port===t.port||""===n.port&&(80==t.port||443==t.port))},E.prototype._samePath=function(e){if(!x)return!1;var t=this._window.location;return e.pathname===t.pathname&&e.search===t.search},E.prototype._decodeURLEncodedURIComponent=function(e){return"string"!=typeof e?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e},_.prototype.pushState=function(){var e=this.page,t=e._window,n=e._hashbang;e.len++,w&&t.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},_.prototype.save=function(){var e=this.page;w&&e._window.history.replaceState(this.state,this.title,e._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},k.prototype.middleware=function(e){var t=this;return function(n,o){if(t.match(n.path,n.params))return n.routePath=t.path,e(n,o);o()}},k.prototype.match=function(e,t){var n=this.keys,o=e.indexOf("?"),i=~o?e.slice(0,o):e,a=this.regexp.exec(decodeURIComponent(i));if(!a)return!1;delete t[0];for(var r=1,s=a.length;r<s;++r){var l=n[r-1],c=this.page._decodeURLEncodedURIComponent(a[r]);void 0===c&&hasOwnProperty.call(t,l.name)||(t[l.name]=c)}return!0};var L=function e(){var t=new E;function n(){return C.apply(t,arguments)}return n.callbacks=t.callbacks,n.exits=t.exits,n.base=t.base.bind(t),n.strict=t.strict.bind(t),n.start=t.start.bind(t),n.stop=t.stop.bind(t),n.show=t.show.bind(t),n.back=t.back.bind(t),n.redirect=t.redirect.bind(t),n.replace=t.replace.bind(t),n.dispatch=t.dispatch.bind(t),n.exit=t.exit.bind(t),n.configure=t.configure.bind(t),n.sameOrigin=t.sameOrigin.bind(t),n.clickHandler=t.clickHandler.bind(t),n.create=e,Object.defineProperty(n,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(n,"current",{get:function(){return t.current},set:function(e){t.current=e}}),n.Context=_,n.Route=k,n}(),U=L,O=L;function S(e){void 0!==window.ga&&(ga("set",{page:e.canonicalPath,title:document.title}),ga("send","pageview"))}function I(e){Array.from(document.querySelectorAll(".navigation-list li a")).forEach((t=>{t.getAttribute("href")===e?t.classList.add("active"):t.classList.remove("active")}))}U.default=O;const R=new FormData;function P(){document.getElementById("searchOmniUnitName").addEventListener("keydown",(e=>{"Enter"===e.key&&(""!==e.target.value?(R.has("name")&&R.delete("name"),R.append("name",e.target.value)):R.delete("name"),e.preventDefault(),A(R))})),document.getElementById("searchOmniUnitElement").onchange=e=>{""!==e.target.value?(R.has("element")&&R.delete("element"),R.append("element",e.target.value)):R.delete("element"),e.preventDefault(),A(R)},document.getElementById("searchOmniUnitKeywords").onchange=e=>{var t,n,o=[];for(let i=0;i<e.target.options.length;i++)n=(t=e.target.options[i]).value,t.selected&&o.push(n);Array.isArray(o)&&o.length>0?(R.has("keywords")&&R.delete("keywords"),R.append("keywords",encodeURIComponent(o.join(",")))):R.delete("keywords"),e.preventDefault(),A(R)}}function A(e){const t=new URLSearchParams(e).toString();t?U.show(`${window.location.pathname}?${t}`):U.show(`${window.location.pathname}`),window.previousOmniUnitsPage&&(window.previousOmniUnitsPage=0)}function N(){return["extra action","evasion","activates BB/SBB/UBB twice","DoT mitigation","negate all status ailments","negates all status ailments","negates all status ailments for all allies","Stealth","normal attacks may hit all foes","raises normal hit amount","status ailment removal","def ignoring effect","reduces BB gauge required","reduction to BB activation cost","fills OD gauge","boosts OD gauge","status ailments infliction","resistance against KO attack","resistance against 1 KO attack","resistance against 2 KO attacks","Adds Doom effect purge from self to BB/UBB","purges Doom","raises allies from KO","purges LS and ES Lock","boost to Summoner Avatar EXP gained","boost to Summoner EXP gained","boost to EXP gained","removes all status ailments","boosts ABP and CBP gain","elemental damage reduction"].map((e=>({value:e,label:e,id:e})))}function T(){return["100% evasion","80% evasion","OD gauge","activates BB/SBB/UBB twice","purges LS and ES Lock","100% DoT reduction","raises normal hit amount","adds status ailment infliction to attack","raises allies from KO","KO resistance","perform 1 extra action within the same turn"].map((e=>({value:e,label:e,id:e})))}let q;function $(e){let t;if(e.querystring){const n=new URLSearchParams(e.querystring),o=n.get("name"),i=n.get("element"),a=n.get("keywords"),r=a?a.split(","):[];o&&i&&a?(document.getElementById("searchOmniUnitName").value=o,document.getElementById("searchOmniUnitElement").value=i,q.setChoiceByValue(r),t=e.state.omniunits.filter((e=>{let t=e.name.toLowerCase(),n=e.element;if(t.includes(o.toLowerCase())&&n===i)for(let t of e.keywords)if(r.includes(t))return e}))):o&&a?(document.getElementById("searchOmniUnitName").value=o,q.setChoiceByValue(r),t=e.state.omniunits.filter((e=>{if(e.name.toLowerCase().includes(o.toLowerCase()))for(let t of e.keywords)if(r.includes(t))return e}))):i&&a?(document.getElementById("searchOmniUnitElement").value=i,q.setChoiceByValue(r),t=e.state.omniunits.filter((e=>{if(e.element===i)for(let t of e.keywords)if(r.includes(t))return e}))):o?(document.getElementById("searchOmniUnitName").value=o,t=e.state.omniunits.filter((e=>{if(e.name.toLowerCase().includes(o.toLowerCase()))return e}))):i?(document.getElementById("searchOmniUnitElement").value=i,t=e.state.omniunits.filter((e=>{if(e.element===i)return e}))):a&&(q.setChoiceByValue(r),t=e.state.omniunits.filter((e=>{for(let t of e.keywords)if(r.includes(t))return e})))}else t=e.state.omniunits;window.omniunits=t;let n=99;return window.selectedOmniUnitIndex&&window.selectedOmniUnitIndex>n&&(n=window.selectedOmniUnitIndex+5),t?t.slice(0,n):[].slice(0,n)}const D=new FormData;function j(e){const t=new URLSearchParams(e).toString();t?U.show(`${window.location.pathname}?${t}`):U.show(`${window.location.pathname}`),window.previousOmniUnitsPage&&(window.previousOmniUnitsPage=0)}let K;U("/",(function(e){document.body.classList.contains("bg-gray-300")&&(document.body.classList.remove("bg-gray-300"),document.body.classList.add("bg-white")),S(e),I(e.path),document.title=e.title="Brave Frontier Wiki | Unofficial",import("./Home-3f840cfd.js").then((e=>{document.querySelector("main").textContent="",document.querySelector("main").appendChild(e.default()),document.querySelector("button").addEventListener("click",(()=>{document.getElementById("banner").style.display="none"}))}))})),U("/omniunits",(function(e){let t;S(e),I(e.path),document.title=e.title="Brave Frontier Wiki",document.querySelector("main").textContent="",document.querySelector("main").appendChild(document.createRange().createContextualFragment('\n  <form method="GET" class="form">\n  <div class="relative mb-4">\n    <select id="searchOmniUnitElement" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">\n      <option value="">Element</option>\n      <option value="Fire">Fire</option>\n      <option value="Water">Water</option>\n      <option value="Earth">Earth</option>\n      <option value="Thunder">Thunder</option>\n      <option value="Light">Light</option>\n      <option value="Dark">Dark</option>\n    </select>\n    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">\n      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>\n    </div>\n  </div>\n  <div class="relative mb-4">\n    <select multiple id="searchOmniUnitKeywords" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">\n      <option value="">Keywords</option>\n    </select>\n  </div>\n  <div class="relative mb-4">\n    <span>\n      <input class="focus:outline-0 bg-transparent border-b border-gray-500 focus:border-green-500 placeholder-gray-600 py-2 pr-4 pl-10 w-full appearance-none leading-normal" type="text" placeholder="Omni unit name" id="searchOmniUnitName">\n    </span>\n    <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">\n      <svg class="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>\n    </div>\n  </div>\n</form>\n  ')),document.querySelector("main").appendChild(function(){const e=document.createDocumentFragment(),t=document.createElement("ul");t.setAttribute("id","omniunit-list");for(let t=0;t<100;t++)e.appendChild(document.createRange().createContextualFragment('\n        <li class="omniunit-card"></li>\n        '));return t.appendChild(e),t}()),q=new Choices(document.getElementById("searchOmniUnitKeywords"),{items:N(),choices:N(),removeItemButton:!0,maxItemCount:3,maxItemText:e=>`Only ${e} values can be added`}),e.state.omniunits?(t=$(e),import("./Content-139dc65b.js").then((e=>{e.default(t),P()}))):(async(e="")=>{const t=await fetch("https://bravefrontier.satyakresna.io/api/v1/omniunits"+(e?`?${e}`:""));return await t.json()})().then((n=>{e.state.omniunits=n,e.save(),t=$(e),import("./Content-139dc65b.js").then((e=>{e.default(t),P()}))}))})),U("/omniunits/:omniunit",(function(e,t){if(e.state.omniunit)return e.omniunit=e.state.omniunit,void t();NProgress.start(),(async e=>{const t=`https://bravefrontier.satyakresna.io/api/v1/omniunits/${e}`,n=await fetch(t);return await n.json()})(encodeURIComponent(e.params.omniunit)).then((n=>{e.state.omniunit=n,e.save(),t()})).catch((e=>{console.log(e);const t=document.createElement("p");t.setAttribute("class","text-center m-auto font-bold"),t.textContent="Opps, failed to get detail of unit. Please try again in 3 minutes...",document.querySelector("main").appendChild(t)}))}),(function(e){var t;window.previousOmniUnitsPage=window.scrollY,S(e),document.title=e.title=`${e.state.omniunit.name} - Brave Frontier Wiki`,t={title:e.state.omniunit.name,description:`${e.state.omniunit.name}'s Profile`,image:`${e.state.omniunit.artwork}`,url:window.location.href},document.querySelector('meta[property="og:title"]').setAttribute("content",t.title),document.querySelector('meta[property="og:description"]').setAttribute("content",t.description),document.querySelector('meta[property="og:image"]').setAttribute("content",t.image),document.querySelector('meta[property="og:url"]').setAttribute("content",t.url),window.omniunits&&(window.selectedOmniUnitIndex=window.omniunits.findIndex((t=>t.name===e.state.omniunit.name))),import("./Profile-873b1f13.js").then((({default:t})=>{document.querySelector("main").textContent="",document.querySelector("main").appendChild(t(e.state.omniunit)),document.getElementById("shareBtn").addEventListener("click",(async t=>{t.preventDefault();try{(await import("./Share-fb7460cb.js")).default(e.state.omniunit)}catch(e){console.log(e)}})),window.scrollTo(0,0),NProgress.done()})).catch((e=>console.log(e)))})),U("/dbbs",(function(e){let t;S(e),I(e.path),document.title=e.title="Brave Frontier Wiki",document.querySelector("main").textContent="",document.querySelector("main").appendChild(document.createRange().createContextualFragment('\n    <form method="GET" class="form">\n    <div class="relative mb-4">\n      <select id="searchElementalSynergy" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">\n        <option value="">Elemental Synergy</option>\n        <option value="Abyss">Abyss</option>\n        <option value="Aurora">Aurora</option>\n        <option value="Blast">Blast</option>\n        <option value="Blaze">Blaze</option>\n        <option value="Cyclone">Cyclone</option>\n        <option value="Eruption">Eruption</option>\n        <option value="Magma">Magma</option>\n        <option value="Miasma">Miasma</option>\n        <option value="Mist">Mist</option>\n        <option value="Obsidian">Obsidian</option>\n        <option value="Nova">Nova</option>\n        <option value="Plasma">Plasma</option>\n        <option value="Prism">Prism</option>\n        <option value="Pyre">Pyre</option>\n        <option value="Quagmire">Quagmire</option>\n        <option value="Radiance">Radiance</option>\n        <option value="Steam">Steam</option>\n        <option value="Tempest">Tempest</option>\n        <option value="Tremor">Tremor</option>\n        <option value="Tsunami">Tsunami</option>\n        <option value="Twilight">Twilight</option>\n      </select>\n      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">\n        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>\n      </div>\n    </div>\n    <div class="mb-4">\n      <select multiple id="searchDbbKeywords" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">\n        <option value="">Keywords</option>\n      </select>\n    </div>\n    <div class="relative mb-4">\n      <span>\n        <input class="focus:outline-0 bg-transparent border-b border-gray-500 focus:border-green-500 placeholder-gray-600 py-2 pr-4 pl-10 w-full appearance-none leading-normal" type="text" placeholder="Omni unit name" id="searchOmniUnitName">\n      </span>\n      <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">\n        <svg class="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>\n      </div>\n    </div>\n  </form>\n    ')),document.querySelector("main").appendChild(function(){const e=document.createDocumentFragment(),t=document.createElement("ul");t.setAttribute("id","dbb-list");for(let t=0;t<100;t++)e.appendChild(document.createRange().createContextualFragment('\n        <li class="dbb-card"></li>\n        '));return t.appendChild(e),t}()),K=new Choices(document.getElementById("searchDbbKeywords"),{items:T(),choices:T(),removeItemButton:!0,maxItemCount:3,maxItemText:e=>`Only ${e} values can be added`}),(async(e="")=>{const t=await fetch("https://bravefrontier.satyakresna.io/api/v1/dbbs"+(e?`?${e}`:""));return await t.json()})().then((n=>{e.state.dbbs=n,e.save(),t=function(e){let t;if(e.querystring){const n=new URLSearchParams(e.querystring),o=n.get("name"),i=n.get("esname"),a=n.get("keywords"),r=a?a.split(","):[];o&&i&&a?(document.getElementById("searchOmniUnitName").value=o,document.getElementById("searchElementalSynergy").value=i,K.setChoiceByValue(r),t=e.state.dbbs.filter((e=>{let t=e.firstUnitName.toLowerCase(),n=e.secondUnitName.toLowerCase(),a=e.elementalSynergyName;if((t.includes(o.toLowerCase())||n.includes(o.toLocaleLowerCase()))&&a===i)for(let t of e.keywords)if(r.includes(t))return e}))):o&&a?(document.getElementById("searchOmniUnitName").value=o,K.setChoiceByValue(r),t=e.state.dbbs.filter((e=>{let t=e.firstUnitName.toLowerCase(),n=e.secondUnitName.toLowerCase();if(t.includes(o.toLowerCase())||n.includes(o.toLocaleLowerCase()))for(let t of e.keywords)if(r.includes(t))return e}))):o&&i?(document.getElementById("searchOmniUnitName").value=o,document.getElementById("searchElementalSynergy").value=i,t=e.state.dbbs.filter((e=>{let t=e.firstUnitName.toLowerCase(),n=e.secondUnitName.toLowerCase(),a=e.elementalSynergyName;if((t.includes(o.toLowerCase())||n.includes(o.toLocaleLowerCase()))&&a===i)return e}))):i&&a?(document.getElementById("searchElementalSynergy").value=i,K.setChoiceByValue(r),t=e.state.dbbs.filter((e=>{if(e.elementalSynergyName===i)for(let t of e.keywords)if(r.includes(t))return e}))):o?(document.getElementById("searchOmniUnitName").value=o,t=e.state.dbbs.filter((e=>{let t=e.firstUnitName.toLowerCase(),n=e.secondUnitName.toLowerCase();if(t.includes(o.toLowerCase())||n.includes(o.toLocaleLowerCase()))return e}))):i?(document.getElementById("searchElementalSynergy").value=i,t=e.state.dbbs.filter((e=>{if(e.elementalSynergyName===i)return e}))):a&&(K.setChoiceByValue(r),t=e.state.dbbs.filter((e=>{for(let t of e.keywords)if(r.includes(t))return e})))}else t=e.state.dbbs;window.dbbs=t;let n=49;return t?t.slice(0,n):[].slice(0,n)}(e),import("./Content-cf6ad67f.js").then((e=>{e.default(t),document.getElementById("searchOmniUnitName").addEventListener("keydown",(e=>{"Enter"===e.key&&(""!==e.target.value?(D.has("name")&&D.delete("name"),D.append("name",e.target.value)):D.delete("name"),e.preventDefault(),j(D))})),document.getElementById("searchElementalSynergy").onchange=e=>{""!==e.target.value?(D.has("esname")&&D.delete("esname"),D.append("esname",e.target.value)):D.delete("esname"),e.preventDefault(),j(D)},document.getElementById("searchDbbKeywords").onchange=e=>{var t,n,o=[];for(let i=0;i<e.target.options.length;i++)n=(t=e.target.options[i]).value,t.selected&&o.push(n);Array.isArray(o)&&o.length>0?(D.has("keywords")&&D.delete("keywords"),D.append("keywords",encodeURIComponent(o.join(",")))):D.delete("keywords"),e.preventDefault(),j(D)}}))})),window.scrollTo(0,0)})),U("*",(function(){document.querySelector("main").textContent="Not found"})),U(),window.prerenderReady=!0;//# sourceMappingURL=app.js.map
