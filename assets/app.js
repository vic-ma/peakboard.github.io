!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){s(1),s(2),s(5),s(6),s(3),e.exports=s(4)},function(e,t,s){"use strict";s.r(t),t.default={els:{accordian:document.querySelector(".accordian-nav"),accordian_triggers:[].slice.call(document.querySelectorAll(".accordian-trigger"))},closeCurrentlyOpenSections(e){this.els.accordian_triggers.forEach((t=>{e!==t&&(t.checked=!1)}))},init(){this.els.accordian&&this.els.accordian_triggers.forEach((e=>{e.addEventListener("change",(({target:e})=>this.closeCurrentlyOpenSections(e)))}))}}},function(e,t,s){"use strict";s.r(t);var i=s(3),n=s(5),r=s(1);if(document.querySelector(".article-content")){new i.default(document.querySelector(".article-content")).init()}document.querySelector(".cta")&&document.querySelector("footer").classList.remove("mt-16"),n.default.init(),r.default.init(),window.addEventListener("load",(()=>{document.querySelector("html").classList.remove("no-js")})),document.getElementById("top-menu-search-button").onclick=function(e){"submit"!==this.type&&(this.setAttribute("type","submit"),document.getElementById("top-menu-search-input").classList.toggle("show"),document.getElementById("top-menu-search-input-field").focus(),e.preventDefault())}},function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return n}));var i=s(4);class n{constructor(e){let t=document.createElement("div");t.classList.add("pk-lightbox"),t.innerHTML=i.default,this.article=e,this.lightbox=t,this.article_images=[].slice.call(document.querySelectorAll(".article-content img:not(.lightbox-ignore)")),this.gallery_image_ids=[],this.current_index=0,this.is_open=!1}init(){this.wrapArticleImages(),this.createGalleryImages(),this.setDataAttributes(),this.setControlListeners(),this.setImageListeners(),this.addPageDots(),this.article.appendChild(this.lightbox)}wrapArticleImages(){this.article_images.forEach((e=>this.wrapImage(e)))}wrapImage(e){const t=e.parentNode,s=document.createElement("div");s.innerHTML='<div class="absolute flex items-center opacity-75 p-1 bottom-0 right-0 bg-grey-darkest text-white"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 30 30">\n    <path d="M16,12h-2v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2h-2c-0.552,0-1,0.448-1,1s0.448,1,1,1h2v2c0,0.552,0.448,1,1,1\n      s1-0.448,1-1v-2h2c0.552,0,1-0.448,1-1S16.552,12,16,12z"/>\n    <path d="M25.139,20.978l-4.052-4.053C21.666,15.737,22,14.408,22,13c0-4.962-4.038-9-9-9s-9,4.038-9,9s4.038,9,9,9\n      c1.408,0,2.737-0.334,3.925-0.914l4.053,4.053c0.574,0.573,1.327,0.859,2.08,0.859c0.754,0,1.507-0.287,2.081-0.86\n      C26.285,23.991,26.285,22.125,25.139,20.978z M6,13c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S6,16.86,6,13z M23.725,23.725\n      c-0.367,0.367-0.964,0.368-1.333,0l-3.734-3.734c0.489-0.397,0.936-0.844,1.333-1.333l3.734,3.735\n      C24.091,22.759,24.091,23.357,23.725,23.725z"/>\n  </svg></div>\n  ',t.insertBefore(s,e),s.appendChild(e),s.classList.add("image-wrapper")}createGalleryImages(){this.article_images.forEach(((e,t)=>{const s=new Image;s.src=e.src,s.classList.add("gallery-image"),s.classList.add("z-50"),s.setAttribute("id",`gallery-img-${t+1}`),this.gallery_image_ids.push(t+1),this.lightbox.appendChild(s)}))}addPageDots(){const e=this.lightbox.querySelector(".lightbox-dots");this.article_images.forEach((t=>{const s=document.createElement("div");s.className="lightbox-dot",e.appendChild(s)}))}setDataAttributes(){this.article_images.forEach(((e,t)=>e.setAttribute("data-img-id",t+1)))}setControlListeners(){this.lightbox.querySelector(".close-lightbox").addEventListener("click",(()=>this.closeLightbox()));this.lightbox.querySelector(".lightbox-arrow.next").addEventListener("click",(()=>this.showNextImage()));this.lightbox.querySelector(".lightbox-arrow.prev").addEventListener("click",(()=>this.showPrevImage())),document.body.addEventListener("keyup",(({keyCode:e})=>this.handleKeyPress(e)))}setImageListeners(){this.article_images.forEach((e=>{const t=e.getAttribute("data-img-id");e.addEventListener("click",(()=>{this.openLightbox(t)}))}))}openLightbox(e){this.current_index=this.gallery_image_ids.indexOf(parseInt(e)),this.is_open=!0,this.showSelectedImage()}closeLightbox(){this.lightbox.classList.remove("open"),this.is_open=!1}showNextImage(){this.current_index<this.gallery_image_ids.length-1?this.current_index++:this.current_index=0,this.showSelectedImage()}showPrevImage(){this.current_index>0?this.current_index--:this.current_index=this.gallery_image_ids.length-1,this.showSelectedImage()}showSelectedImage(){this.clearImageClasses(),this.currentImage().classList.add("selected"),this.currentDot().classList.add("current"),this.lightbox.classList.add("open")}currentImage(){const e=this.gallery_image_ids[this.current_index];return this.lightbox.querySelector(`#gallery-img-${e}`)}currentDot(){return[].slice.call(this.lightbox.querySelectorAll(".lightbox-dot"))[this.current_index]}clearImageClasses(){[].slice.call(this.lightbox.querySelectorAll(".gallery-image")).forEach((e=>e.classList.remove("selected")));[].slice.call(this.lightbox.querySelectorAll(".lightbox-dot")).forEach((e=>e.classList.remove("current")))}handleKeyPress(e){if(this.is_open)switch(e){case 27:this.closeLightbox();break;case 37:this.showPrevImage();break;case 39:this.showNextImage()}}}},function(e,t,s){"use strict";s.r(t),t.default='\n        <div class="close-lightbox">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="24px"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>\n        </div>\n        <button class="lightbox-arrow next text-white hover:text-orange">\n        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30">\n\t<path d="M10,26c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L18.586,15L9.293,5.707\n\t\tc-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l10,10c0.391,0.391,0.391,1.023,0,1.414l-10,10\n\t\tC10.512,25.902,10.256,26,10,26z"/>\n</svg>\n        </button>\n        <button class="lightbox-arrow prev text-white hover:text-orange">\n        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30">\n\t<path d="M20,26c-0.256,0-0.512-0.098-0.707-0.293l-10-10c-0.391-0.391-0.391-1.023,0-1.414l10-10c0.391-0.391,1.023-0.391,1.414,0\n\t\ts0.391,1.023,0,1.414L11.414,15l9.293,9.293c0.391,0.391,0.391,1.023,0,1.414C20.512,25.902,20.256,26,20,26z"/>\n</svg>\n\n        </button>\n        <div class="lightbox-dots"></div>\n'},function(e,t,s){"use strict";s.r(t),t.default={els:{trigger:document.querySelector(".menu-trigger"),navbar:document.querySelector(".navbar"),dropdown_lists:[].slice.call(document.querySelector(".dropdown-list")),categories:[].slice.call(document.querySelectorAll(".nav-top-link")),sub_categories:[].slice.call(document.querySelectorAll(".has-submenu")),last_menu_item:document.querySelector(".top-menu-link:last-child"),html:document.querySelector("html")},isNavbarOpen(){return this.els.navbar.classList.contains("show")},openNavbar(){this.els.html.classList.add("stuck"),this.els.navbar.classList.add("show")},closeNavbar(){this.closeAllMenus(),this.els.navbar.classList.remove("show")},toggleNavbar(){this.isNavbarOpen()?this.closeNavbar():this.openNavbar()},handleCategoryToggle(e,t){this.categoryMenuIsOpen(e)?this.hideCategoryMenu(e):this.showCategoryMenu(e)},categoryMenuIsOpen:e=>e.classList.contains("exposed"),showCategoryMenu(e){this.closeAllMenus(),this.els.html.classList.add("stuck"),e.classList.add("exposed")},hideCategoryMenu(e){this.closeAllMenus(),e.classList.remove("exposed")},closeAllMenus(){this.resetOuterMenu(),this.closeSubmenus(),this.els.html.classList.remove("stuck")},resetOuterMenu(){this.els.categories.forEach((e=>e.classList.remove("exposed")))},exposeSubmenu(e,t){e.classList.add("exposed"),t.classList.contains("height-fix")&&t.classList.add("submenu-height-fix")},closeSubmenus(){[].slice.call(document.querySelectorAll(".sub_level_list.exposed")).forEach((e=>{e.classList.remove("exposed"),e.parentElement.parentElement.parentElement.classList.remove("submenu-height-fix")}))},init(){this.els.trigger.addEventListener("click",(()=>this.toggleNavbar())),this.els.categories.forEach((e=>{const t=e.querySelector(".dropdown-list");if(!t)return;t.querySelector(".inner-menu-close").addEventListener("click",(e=>{e.stopPropagation(),this.resetOuterMenu()})),e.addEventListener("click",(t=>{e.querySelector(".dropdown-list").contains(t.target)||this.handleCategoryToggle(e)}))})),this.els.sub_categories.forEach((e=>{e.addEventListener("click",(t=>{t.stopPropagation(),this.exposeSubmenu(e.querySelector(".sub_level_list"),e.parentElement.parentElement)}))}));[].slice.call(document.querySelectorAll(".sub-level-list-close")).forEach((e=>e.addEventListener("click",(e=>{e.stopPropagation(),this.closeSubmenus()})))),document.body.addEventListener("click",(e=>{this.els.navbar.contains(e.target)||this.closeAllMenus()}))}}},function(e,t){var s,i=document.getElementById("review-thumbs-up"),n=document.getElementById("review-thumbs-down"),r=document.getElementById("review-text-input"),l=document.getElementById("review-text"),o=document.getElementById("review-text-two"),c=document.getElementById("review-button"),a="3XtcAznSGPVG-sbIpPzqSBZnPWm93poS7gyRzvodOtD3AzFuGmIvpw==";function d(e,t){fetch(e).then((e=>e.text())).then((e=>{s=JSON.parse(e.replace(/(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?:/g,'$1"$3":')).ID,t&&t()}))}null!=i&&i.addEventListener("click",(function(){d("https://peakboarddwhfunctions.azurewebsites.net/api/SubmitUserFeedback?code="+a+"&Article="+window.location.href+"&Thumbs=Up",(function(){i.classList.toggle("hidden"),n.classList.toggle("hidden"),l.classList.toggle("hidden"),o.classList.toggle("hidden")}))})),null!=n&&n.addEventListener("click",(function(){d("https://peakboarddwhfunctions.azurewebsites.net/api/SubmitUserFeedback?code="+a+"&Article="+window.location.href+"&Thumbs=Down"),l.classList.toggle("hidden"),r.classList.toggle("hidden"),c.classList.toggle("hidden"),i.classList.toggle("hidden"),n.classList.toggle("hidden"),document.getElementById("review-button").addEventListener("click",(function(){d("https://peakboarddwhfunctions.azurewebsites.net/api/SubmitUserFeedback?code="+a+"&ID="+s+"&Feedback="+r.value,(function(){o.classList.toggle("hidden"),r.classList.toggle("hidden"),c.classList.toggle("hidden")}))}))}))}]);