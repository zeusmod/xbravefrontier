function e(e){return document.createRange().createContextualFragment(`\n    <li class="dbb-card">\n        <div class="dbb-card-container">\n            <p class="dbb-elemental-synergy">${e.elementalSynergyName}</p>\n            <div class="flex m-4">\n                <a href="/omniunits/${e.firstUnitName.split(" ").join("_")}">\n                    <img class="mx-4" data-src="https://res.cloudinary.com/satyakresna/image/upload/bravefrontier/omniunits/thumbnails/${e.firstUnitId}" width="50" height="50" alt="${e.firstUnitName}'s thumbnail" />\n                </a>\n                <a href="/omniunits/${e.secondUnitName.split(" ").join("_")}">\n                    <img class="mx-4" data-src="https://res.cloudinary.com/satyakresna/image/upload/bravefrontier/omniunits/thumbnails/${e.secondUnitId}" width="50" height="50" alt="${e.secondUnitName}'s thumbnail" />\n                </a>\n            </div>\n            <p class="dbb-card-name">${e.dbbName}</p>\n        </div>\n        <div class="dbb-card-desc-wrapper">\n            <p class="dbb-card-desc">${e.dbbDesc}</p>\n        </div>\n    </li>\n    `)}function t(t){if(Array.isArray(t)&&t.length>0){const r=document.createDocumentFragment(),a=document.getElementById("dbb-list");a.textContent="";for(const n of t)r.appendChild(e(n));a.appendChild(r),document.querySelector("main").appendChild(a),window.dbbs?n(window.dbbs):n(t)}else document.querySelector("main #dbb-list").remove(),document.querySelector("main").appendChild(document.createRange().createContextualFragment('\n      <p class="text-center mt-4">\n        <strong>Opps.. Not found. :(</strong>\n      </p>\n    '))}function n(t){if(Array.isArray(t)&&t.length>0){const r=document.querySelector("ul#dbb-list").lastElementChild,a=document.querySelector("ul#dbb-list").children;new IntersectionObserver((function(r,s){if(r[0].isIntersecting){const i=a.length-1+1,o=a.length+50;if(a.length<t.length){const r=t.slice(i,o),a=document.createDocumentFragment();for(const t of r)a.appendChild(e(t));document.querySelector("ul#dbb-list").appendChild(a),n(t)}s.unobserve(r[0].target)}}),{root:null,rootMargin:"0px",threshold:1}).observe(r),function(){const e=document.querySelectorAll("[data-src]");let t=new IntersectionObserver((function(e,t){e.forEach((e=>{if(e.isIntersecting){const n=e.target.getAttribute("data-src");if(!n)return;e.target.src=n,t.unobserve(e.target)}}))}),{rootMargin:"0px 0px 50px 0px",threshold:0});e.forEach((e=>{t.observe(e)}))}()}}export default t;//# sourceMappingURL=Content-cf6ad67f.js.map
