!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){i(1),i(2),i(5),i(3),i(4),e.exports=i(6)},function(e,t,i){"use strict";i.r(t),t.default={els:{accordian:document.querySelector(".accordian-nav"),accordian_triggers:[].slice.call(document.querySelectorAll(".accordian-trigger"))},closeCurrentlyOpenSections(e){this.els.accordian_triggers.forEach((t=>{e!==t&&(t.checked=!1)}))},init(){this.els.accordian&&this.els.accordian_triggers.forEach((e=>{e.addEventListener("change",(({target:e})=>this.closeCurrentlyOpenSections(e)))}))}}},function(e,t,i){"use strict";i.r(t);var n=i(3),s=i(5),o=i(1);if(document.querySelector(".article-content")){new n.default(document.querySelector(".article-content")).init()}document.querySelector(".cta")&&document.querySelector("footer").classList.remove("mt-16"),s.default.init(),o.default.init(),window.addEventListener("load",(()=>{document.querySelector("html").classList.remove("no-js")})),document.getElementById("top-menu-search-button").onclick=function(e){"submit"!==this.type&&(this.setAttribute("type","submit"),document.getElementById("top-menu-search-input").classList.toggle("show"),document.getElementById("top-menu-search-input-field").focus(),e.preventDefault())}},function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return s}));var n=i(4);class s{constructor(e){let t=document.createElement("div");t.classList.add("pk-lightbox"),t.innerHTML=n.default,this.article=e,this.lightbox=t,this.article_images=[].slice.call(document.querySelectorAll(".article-content img:not(.lightbox-ignore)")),this.gallery_image_ids=[],this.current_index=0,this.is_open=!1}init(){this.wrapArticleImages(),this.createGalleryImages(),this.setDataAttributes(),this.setControlListeners(),this.setImageListeners(),this.addPageDots(),this.article.appendChild(this.lightbox)}wrapArticleImages(){this.article_images.forEach((e=>this.wrapImage(e)))}wrapImage(e){const t=e.parentNode,i=document.createElement("div");i.innerHTML='<div class="absolute flex items-center opacity-75 p-1 bottom-0 right-0 bg-grey-darkest text-white"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 30 30">\n    <path d="M16,12h-2v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2h-2c-0.552,0-1,0.448-1,1s0.448,1,1,1h2v2c0,0.552,0.448,1,1,1\n      s1-0.448,1-1v-2h2c0.552,0,1-0.448,1-1S16.552,12,16,12z"/>\n    <path d="M25.139,20.978l-4.052-4.053C21.666,15.737,22,14.408,22,13c0-4.962-4.038-9-9-9s-9,4.038-9,9s4.038,9,9,9\n      c1.408,0,2.737-0.334,3.925-0.914l4.053,4.053c0.574,0.573,1.327,0.859,2.08,0.859c0.754,0,1.507-0.287,2.081-0.86\n      C26.285,23.991,26.285,22.125,25.139,20.978z M6,13c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S6,16.86,6,13z M23.725,23.725\n      c-0.367,0.367-0.964,0.368-1.333,0l-3.734-3.734c0.489-0.397,0.936-0.844,1.333-1.333l3.734,3.735\n      C24.091,22.759,24.091,23.357,23.725,23.725z"/>\n  </svg></div>\n  ',t.insertBefore(i,e),i.appendChild(e),i.classList.add("image-wrapper")}createGalleryImages(){this.article_images.forEach(((e,t)=>{const i=new Image;i.src=e.src,i.classList.add("gallery-image"),i.classList.add("z-50"),i.setAttribute("id",`gallery-img-${t+1}`),this.gallery_image_ids.push(t+1),this.lightbox.appendChild(i)}))}addPageDots(){const e=this.lightbox.querySelector(".lightbox-dots");this.article_images.forEach((t=>{const i=document.createElement("div");i.className="lightbox-dot",e.appendChild(i)}))}setDataAttributes(){this.article_images.forEach(((e,t)=>e.setAttribute("data-img-id",t+1)))}setControlListeners(){this.lightbox.querySelector(".close-lightbox").addEventListener("click",(()=>this.closeLightbox()));this.lightbox.querySelector(".lightbox-arrow.next").addEventListener("click",(()=>this.showNextImage()));this.lightbox.querySelector(".lightbox-arrow.prev").addEventListener("click",(()=>this.showPrevImage())),document.body.addEventListener("keyup",(({keyCode:e})=>this.handleKeyPress(e)))}setImageListeners(){this.article_images.forEach((e=>{const t=e.getAttribute("data-img-id");e.addEventListener("click",(()=>{this.openLightbox(t)}))}))}openLightbox(e){this.current_index=this.gallery_image_ids.indexOf(parseInt(e)),this.is_open=!0,this.showSelectedImage()}closeLightbox(){this.lightbox.classList.remove("open"),this.is_open=!1}showNextImage(){this.current_index<this.gallery_image_ids.length-1?this.current_index++:this.current_index=0,this.showSelectedImage()}showPrevImage(){this.current_index>0?this.current_index--:this.current_index=this.gallery_image_ids.length-1,this.showSelectedImage()}showSelectedImage(){this.clearImageClasses(),this.currentImage().classList.add("selected"),this.currentDot().classList.add("current"),this.lightbox.classList.add("open")}currentImage(){const e=this.gallery_image_ids[this.current_index];return this.lightbox.querySelector(`#gallery-img-${e}`)}currentDot(){return[].slice.call(this.lightbox.querySelectorAll(".lightbox-dot"))[this.current_index]}clearImageClasses(){[].slice.call(this.lightbox.querySelectorAll(".gallery-image")).forEach((e=>e.classList.remove("selected")));[].slice.call(this.lightbox.querySelectorAll(".lightbox-dot")).forEach((e=>e.classList.remove("current")))}handleKeyPress(e){if(this.is_open)switch(e){case 27:this.closeLightbox();break;case 37:this.showPrevImage();break;case 39:this.showNextImage()}}}},function(e,t,i){"use strict";i.r(t),t.default='\n        <div class="close-lightbox">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="24px"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>\n        </div>\n        <button class="lightbox-arrow next text-white hover:text-orange">\n        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30">\n\t<path d="M10,26c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L18.586,15L9.293,5.707\n\t\tc-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l10,10c0.391,0.391,0.391,1.023,0,1.414l-10,10\n\t\tC10.512,25.902,10.256,26,10,26z"/>\n</svg>\n        </button>\n        <button class="lightbox-arrow prev text-white hover:text-orange">\n        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30">\n\t<path d="M20,26c-0.256,0-0.512-0.098-0.707-0.293l-10-10c-0.391-0.391-0.391-1.023,0-1.414l10-10c0.391-0.391,1.023-0.391,1.414,0\n\t\ts0.391,1.023,0,1.414L11.414,15l9.293,9.293c0.391,0.391,0.391,1.023,0,1.414C20.512,25.902,20.256,26,20,26z"/>\n</svg>\n\n        </button>\n        <div class="lightbox-dots"></div>\n'},function(e,t,i){"use strict";i.r(t),t.default={els:{trigger:document.querySelector(".menu-trigger"),navbar:document.querySelector(".navbar"),dropdown_lists:[].slice.call(document.querySelector(".dropdown-list")),categories:[].slice.call(document.querySelectorAll(".nav-top-link")),sub_categories:[].slice.call(document.querySelectorAll(".has-submenu")),last_menu_item:document.querySelector(".top-menu-link:last-child"),html:document.querySelector("html")},isNavbarOpen(){return this.els.navbar.classList.contains("show")},openNavbar(){this.els.html.classList.add("stuck"),this.els.navbar.classList.add("show")},closeNavbar(){this.closeAllMenus(),this.els.navbar.classList.remove("show")},toggleNavbar(){this.isNavbarOpen()?this.closeNavbar():this.openNavbar()},handleCategoryToggle(e,t){this.categoryMenuIsOpen(e)?this.hideCategoryMenu(e):this.showCategoryMenu(e)},categoryMenuIsOpen:e=>e.classList.contains("exposed"),showCategoryMenu(e){this.closeAllMenus(),this.els.html.classList.add("stuck"),e.classList.add("exposed")},hideCategoryMenu(e){this.closeAllMenus(),e.classList.remove("exposed")},closeAllMenus(){this.resetOuterMenu(),this.closeSubmenus(),this.els.html.classList.remove("stuck")},resetOuterMenu(){this.els.categories.forEach((e=>e.classList.remove("exposed")))},exposeSubmenu(e,t){e.classList.add("exposed"),t.classList.contains("height-fix")&&t.classList.add("submenu-height-fix")},closeSubmenus(){[].slice.call(document.querySelectorAll(".sub_level_list.exposed")).forEach((e=>{e.classList.remove("exposed"),e.parentElement.parentElement.parentElement.classList.remove("submenu-height-fix")}))},init(){this.els.trigger.addEventListener("click",(()=>this.toggleNavbar())),this.els.categories.forEach((e=>{const t=e.querySelector(".dropdown-list");if(!t)return;t.querySelector(".inner-menu-close").addEventListener("click",(e=>{e.stopPropagation(),this.resetOuterMenu()})),e.addEventListener("click",(t=>{e.querySelector(".dropdown-list").contains(t.target)||this.handleCategoryToggle(e)}))})),this.els.sub_categories.forEach((e=>{e.addEventListener("click",(t=>{t.stopPropagation(),this.exposeSubmenu(e.querySelector(".sub_level_list"),e.parentElement.parentElement)}))}));[].slice.call(document.querySelectorAll(".sub-level-list-close")).forEach((e=>e.addEventListener("click",(e=>{e.stopPropagation(),this.closeSubmenus()})))),document.body.addEventListener("click",(e=>{this.els.navbar.contains(e.target)||this.closeAllMenus()}))}}},function(e,t){!function(e){if(!e.hasInitialised){var t={escapeRegExp:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},hasClass:function(e,t){var i=" ";return 1===e.nodeType&&(i+e.className+i).replace(/[\n\t]/g,i).indexOf(i+t+i)>=0},addClass:function(e,t){e.className+=" "+t},removeClass:function(e,t){var i=new RegExp("\\b"+this.escapeRegExp(t)+"\\b");e.className=e.className.replace(i,"")},interpolateString:function(e,t){return e.replace(/{{([a-z][a-z0-9\-_]*)}}/gi,(function(e){return t(arguments[1])||""}))},getCookie:function(e){var t=("; "+document.cookie).split("; "+e+"=");return t.length<2?void 0:t.pop().split(";").shift()},setCookie:function(e,t,i,n,s,o){var r=new Date;r.setDate(r.getDate()+(i||365));var a=[e+"="+t,"expires="+r.toUTCString(),"path="+(s||"/")];n&&a.push("domain="+n),o&&a.push("secure"),document.cookie=a.join(";")},deepExtend:function(e,t){for(var i in t)t.hasOwnProperty(i)&&(i in e&&this.isPlainObject(e[i])&&this.isPlainObject(t[i])?this.deepExtend(e[i],t[i]):e[i]=t[i]);return e},throttle:function(e,t){var i=!1;return function(){i||(e.apply(this,arguments),i=!0,setTimeout((function(){i=!1}),t))}},hash:function(e){var t,i,n=0;if(0===e.length)return n;for(t=0,i=e.length;t<i;++t)n=(n<<5)-n+e.charCodeAt(t),n|=0;return n},normaliseHex:function(e){return"#"==e[0]&&(e=e.substr(1)),3==e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e},getContrast:function(e){return e=this.normaliseHex(e),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000":"#fff"},getLuminance:function(e){var t=parseInt(this.normaliseHex(e),16),i=38+(t>>16),n=38+(t>>8&255),s=38+(255&t);return"#"+(16777216+65536*(i<255?i<1?0:i:255)+256*(n<255?n<1?0:n:255)+(s<255?s<1?0:s:255)).toString(16).slice(1)},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},isPlainObject:function(e){return"object"==typeof e&&null!==e&&e.constructor==Object},traverseDOMPath:function(e,i){return e&&e.parentNode?t.hasClass(e,i)?e:this.traverseDOMPath(e.parentNode,i):null}};e.status={deny:"deny",allow:"allow",dismiss:"dismiss"},e.transitionEnd=function(){var e=document.createElement("div"),t={t:"transitionend",OT:"oTransitionEnd",msT:"MSTransitionEnd",MozT:"transitionend",WebkitT:"webkitTransitionEnd"};for(var i in t)if(t.hasOwnProperty(i)&&void 0!==e.style[i+"ransition"])return t[i];return""}(),e.hasTransition=!!e.transitionEnd;var i=Object.keys(e.status).map(t.escapeRegExp);e.customStyles={},e.Popup=function(){function n(){this.initialise.apply(this,arguments)}function s(e){this.openingTimeout=null,t.removeClass(e,"cc-invisible")}function o(t){t.style.display="none",t.removeEventListener(e.transitionEnd,this.afterTransition),this.afterTransition=null}function r(){var t=this.options.onInitialise.bind(this);if(!window.navigator.cookieEnabled)return t(e.status.deny),!0;if(window.CookiesOK||window.navigator.CookiesOK)return t(e.status.allow),!0;var i=Object.keys(e.status),n=this.getStatus(),s=i.indexOf(n)>=0;return s&&t(n),s}function a(){var e=this.options.position.split("-"),t=[];return e.forEach((function(e){t.push("cc-"+e)})),t}function c(){var e=this.options,i="top"==e.position||"bottom"==e.position?"banner":"floating";t.isMobile()&&(i="floating");var n=["cc-"+i,"cc-type-"+e.type,"cc-theme-"+e.theme];return e.static&&n.push("cc-static"),n.push.apply(n,a.call(this)),d.call(this,this.options.palette),this.customStyleSelector&&n.push(this.customStyleSelector),n}function l(){var e={},i=this.options;i.showLink||(i.elements.link="",i.elements.messagelink=i.elements.message),Object.keys(i.elements).forEach((function(n){e[n]=t.interpolateString(i.elements[n],(function(e){var t=i.content[e];return e&&"string"==typeof t&&t.length?t:""}))}));var n=i.compliance[i.type];n||(n=i.compliance.info),e.compliance=t.interpolateString(n,(function(t){return e[t]}));var s=i.layouts[i.layout];return s||(s=i.layouts.basic),t.interpolateString(s,(function(t){return e[t]}))}function h(i){var n=this.options,s=document.createElement("div"),o=n.container&&1===n.container.nodeType?n.container:document.body;s.innerHTML=i;var r=s.children[0];return r.style.display="none",t.hasClass(r,"cc-window")&&e.hasTransition&&t.addClass(r,"cc-invisible"),this.onButtonClick=u.bind(this),r.addEventListener("click",this.onButtonClick),n.autoAttach&&(o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r)),r}function u(n){var s=t.traverseDOMPath(n.target,"cc-btn")||n.target;if(t.hasClass(s,"cc-btn")){var o=s.className.match(new RegExp("\\bcc-("+i.join("|")+")\\b")),r=o&&o[1]||!1;r&&(this.setStatus(r),this.close(!0))}t.hasClass(s,"cc-close")&&(this.setStatus(e.status.dismiss),this.close(!0)),t.hasClass(s,"cc-revoke")&&this.revokeChoice()}function d(e){var i=t.hash(JSON.stringify(e)),n="cc-color-override-"+i,s=t.isPlainObject(e);return this.customStyleSelector=s?n:null,s&&p(i,e,"."+n),s}function p(i,n,s){if(e.customStyles[i])++e.customStyles[i].references;else{var o={},r=n.popup,a=n.button,c=n.highlight;r&&(r.text=r.text?r.text:t.getContrast(r.background),r.link=r.link?r.link:r.text,o[s+".cc-window"]=["color: "+r.text,"background-color: "+r.background],o[s+".cc-revoke"]=["color: "+r.text,"background-color: "+r.background],o[s+" .cc-link,"+s+" .cc-link:active,"+s+" .cc-link:visited"]=["color: "+r.link],a&&(a.text=a.text?a.text:t.getContrast(a.background),a.border=a.border?a.border:"transparent",o[s+" .cc-btn"]=["color: "+a.text,"border-color: "+a.border,"background-color: "+a.background],a.padding&&o[s+" .cc-btn"].push("padding: "+a.padding),"transparent"!=a.background&&(o[s+" .cc-btn:hover, "+s+" .cc-btn:focus"]=["background-color: "+(a.hover||g(a.background))]),c?(c.text=c.text?c.text:t.getContrast(c.background),c.border=c.border?c.border:"transparent",o[s+" .cc-highlight .cc-btn:first-child"]=["color: "+c.text,"border-color: "+c.border,"background-color: "+c.background]):o[s+" .cc-highlight .cc-btn:first-child"]=["color: "+r.text]));var l=document.createElement("style");document.head.appendChild(l),e.customStyles[i]={references:1,element:l.sheet};var h=-1;for(var u in o)o.hasOwnProperty(u)&&l.sheet.insertRule(u+"{"+o[u].join(";")+"}",++h)}}function g(e){return"000000"==(e=t.normaliseHex(e))?"#222":t.getLuminance(e)}function m(e,t){for(var i=0,n=e.length;i<n;++i){var s=e[i];if(s instanceof RegExp&&s.test(t)||"string"==typeof s&&s.length&&s===t)return!0}return!1}function v(){var i=this.setStatus.bind(this),n=this.close.bind(this),s=this.options.dismissOnTimeout;"number"==typeof s&&s>=0&&(this.dismissTimeout=window.setTimeout((function(){i(e.status.dismiss),n(!0)}),Math.floor(s)));var o=this.options.dismissOnScroll;if("number"==typeof o&&o>=0){var r=function(t){window.pageYOffset>Math.floor(o)&&(i(e.status.dismiss),n(!0),window.removeEventListener("scroll",r),this.onWindowScroll=null)};this.options.enabled&&(this.onWindowScroll=r,window.addEventListener("scroll",r))}var a=this.options.dismissOnWindowClick,c=this.options.ignoreClicksFrom;if(a){var l=function(s){for(var o=!1,r=s.path.length,a=c.length,h=0;h<r;h++)if(!o)for(var u=0;u<a;u++)o||(o=t.hasClass(s.path[h],c[u]));o||(i(e.status.dismiss),n(!0),window.removeEventListener("click",l),this.onWindowClick=null)}.bind(this);this.options.enabled&&(this.onWindowClick=l,window.addEventListener("click",l))}}function f(){if("info"!=this.options.type&&(this.options.revokable=!0),t.isMobile()&&(this.options.animateRevokable=!1),this.options.revokable){var e=a.call(this);this.options.animateRevokable&&e.push("cc-animate"),this.customStyleSelector&&e.push(this.customStyleSelector);var i=this.options.revokeBtn.replace("{{classes}}",e.join(" ")).replace("{{policy}}",this.options.content.policy);this.revokeBtn=h.call(this,i);var n=this.revokeBtn;if(this.options.animateRevokable){var s=t.throttle((function(e){var i=!1,s=window.innerHeight-20;t.hasClass(n,"cc-top")&&e.clientY<20&&(i=!0),t.hasClass(n,"cc-bottom")&&e.clientY>s&&(i=!0),i?t.hasClass(n,"cc-active")||t.addClass(n,"cc-active"):t.hasClass(n,"cc-active")&&t.removeClass(n,"cc-active")}),200);this.onMouseMove=s,window.addEventListener("mousemove",s)}}}var b={enabled:!0,container:null,cookie:{name:"cookieconsent_status",path:"/",domain:"",expiryDays:365,secure:!1},onPopupOpen:function(){},onPopupClose:function(){},onInitialise:function(e){},onStatusChange:function(e,t){},onRevokeChoice:function(){},onNoCookieLaw:function(e,t){},content:{header:"Cookies used on the website!",message:"This website uses cookies to ensure you get the best experience on our website.",dismiss:"Got it!",allow:"Allow cookies",deny:"Decline",link:"Learn more",href:"https://cookiesandyou.com",close:"&#x274c;",target:"_blank",policy:"Cookie Policy"},elements:{header:'<span class="cc-header">{{header}}</span>&nbsp;',message:'<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',messagelink:'<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',dismiss:'<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',allow:'<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',deny:'<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',link:'<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',close:'<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'},window:'<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',revokeBtn:'<div class="cc-revoke {{classes}}">{{policy}}</div>',compliance:{info:'<div class="cc-compliance">{{dismiss}}</div>',"opt-in":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',"opt-out":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'},type:"info",layouts:{basic:"{{messagelink}}{{compliance}}","basic-close":"{{messagelink}}{{compliance}}{{close}}","basic-header":"{{header}}{{message}}{{link}}{{compliance}}"},layout:"basic",position:"bottom",theme:"block",static:!1,palette:null,revokable:!1,animateRevokable:!0,showLink:!0,dismissOnScroll:!1,dismissOnTimeout:!1,dismissOnWindowClick:!1,ignoreClicksFrom:["cc-revoke","cc-btn"],autoOpen:!0,autoAttach:!0,whitelistPage:[],blacklistPage:[],overrideHTML:null};return n.prototype.initialise=function(e){this.options&&this.destroy(),t.deepExtend(this.options={},b),t.isPlainObject(e)&&t.deepExtend(this.options,e),r.call(this)&&(this.options.enabled=!1),m(this.options.blacklistPage,location.pathname)&&(this.options.enabled=!1),m(this.options.whitelistPage,location.pathname)&&(this.options.enabled=!0);var i=this.options.window.replace("{{classes}}",c.call(this).join(" ")).replace("{{children}}",l.call(this)),n=this.options.overrideHTML;if("string"==typeof n&&n.length&&(i=n),this.options.static){var s=h.call(this,'<div class="cc-grower">'+i+"</div>");s.style.display="",this.element=s.firstChild,this.element.style.display="none",t.addClass(this.element,"cc-invisible")}else this.element=h.call(this,i);v.call(this),f.call(this),this.options.autoOpen&&this.autoOpen()},n.prototype.destroy=function(){this.onButtonClick&&this.element&&(this.element.removeEventListener("click",this.onButtonClick),this.onButtonClick=null),this.dismissTimeout&&(clearTimeout(this.dismissTimeout),this.dismissTimeout=null),this.onWindowScroll&&(window.removeEventListener("scroll",this.onWindowScroll),this.onWindowScroll=null),this.onWindowClick&&(window.removeEventListener("click",this.onWindowClick),this.onWindowClick=null),this.onMouseMove&&(window.removeEventListener("mousemove",this.onMouseMove),this.onMouseMove=null),this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null,this.revokeBtn&&this.revokeBtn.parentNode&&this.revokeBtn.parentNode.removeChild(this.revokeBtn),this.revokeBtn=null,function(i){if(t.isPlainObject(i)){var n=t.hash(JSON.stringify(i)),s=e.customStyles[n];if(s&&!--s.references){var o=s.element.ownerNode;o&&o.parentNode&&o.parentNode.removeChild(o),e.customStyles[n]=null}}}(this.options.palette),this.options=null},n.prototype.open=function(t){if(this.element)return this.isOpen()||(e.hasTransition?this.fadeIn():this.element.style.display="",this.options.revokable&&this.toggleRevokeButton(),this.options.onPopupOpen.call(this)),this},n.prototype.close=function(t){if(this.element)return this.isOpen()&&(e.hasTransition?this.fadeOut():this.element.style.display="none",t&&this.options.revokable&&this.toggleRevokeButton(!0),this.options.onPopupClose.call(this)),this},n.prototype.fadeIn=function(){var i=this.element;if(e.hasTransition&&i&&(this.afterTransition&&o.call(this,i),t.hasClass(i,"cc-invisible"))){if(i.style.display="",this.options.static){var n=this.element.clientHeight;this.element.parentNode.style.maxHeight=n+"px"}this.openingTimeout=setTimeout(s.bind(this,i),20)}},n.prototype.fadeOut=function(){var i=this.element;e.hasTransition&&i&&(this.openingTimeout&&(clearTimeout(this.openingTimeout),s.bind(this,i)),t.hasClass(i,"cc-invisible")||(this.options.static&&(this.element.parentNode.style.maxHeight=""),this.afterTransition=o.bind(this,i),i.addEventListener(e.transitionEnd,this.afterTransition),t.addClass(i,"cc-invisible")))},n.prototype.isOpen=function(){return this.element&&""==this.element.style.display&&(!e.hasTransition||!t.hasClass(this.element,"cc-invisible"))},n.prototype.toggleRevokeButton=function(e){this.revokeBtn&&(this.revokeBtn.style.display=e?"":"none")},n.prototype.revokeChoice=function(e){this.options.enabled=!0,this.clearStatus(),this.options.onRevokeChoice.call(this),e||this.autoOpen()},n.prototype.hasAnswered=function(t){return Object.keys(e.status).indexOf(this.getStatus())>=0},n.prototype.hasConsented=function(t){var i=this.getStatus();return i==e.status.allow||i==e.status.dismiss},n.prototype.autoOpen=function(e){!this.hasAnswered()&&this.options.enabled?this.open():this.hasAnswered()&&this.options.revokable&&this.toggleRevokeButton(!0)},n.prototype.setStatus=function(i){var n=this.options.cookie,s=t.getCookie(n.name),o=Object.keys(e.status).indexOf(s)>=0;Object.keys(e.status).indexOf(i)>=0?(t.setCookie(n.name,i,n.expiryDays,n.domain,n.path,n.secure),this.options.onStatusChange.call(this,i,o)):this.clearStatus()},n.prototype.getStatus=function(){return t.getCookie(this.options.cookie.name)},n.prototype.clearStatus=function(){var e=this.options.cookie;t.setCookie(e.name,"",-1,e.domain,e.path)},n}(),e.Location=function(){function e(e){t.deepExtend(this.options={},o),t.isPlainObject(e)&&t.deepExtend(this.options,e),this.currentServiceIndex=-1}function i(e,t,i){var n,s=document.createElement("script");s.type="text/"+(e.type||"javascript"),s.src=e.src||e,s.async=!1,s.onreadystatechange=s.onload=function(){var e=s.readyState;clearTimeout(n),t.done||e&&!/loaded|complete/.test(e)||(t.done=!0,t(),s.onreadystatechange=s.onload=null)},document.body.appendChild(s),n=setTimeout((function(){t.done=!0,t(),s.onreadystatechange=s.onload=null}),i)}function n(e,t,i,n,s){var o=new(window.XMLHttpRequest||window.ActiveXObject)("MSXML2.XMLHTTP.3.0");if(o.open(n?"POST":"GET",e,1),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),Array.isArray(s))for(var r=0,a=s.length;r<a;++r){var c=s[r].split(":",2);o.setRequestHeader(c[0].replace(/^\s+|\s+$/g,""),c[1].replace(/^\s+|\s+$/g,""))}"function"==typeof t&&(o.onreadystatechange=function(){o.readyState>3&&t(o)}),o.send(n)}function s(e){return new Error("Error ["+(e.code||"UNKNOWN")+"]: "+e.error)}var o={timeout:5e3,services:["ipinfo"],serviceDefinitions:{ipinfo:function(){return{url:"//ipinfo.io",headers:["Accept: application/json"],callback:function(e,t){try{var i=JSON.parse(t);return i.error?s(i):{code:i.country}}catch(e){return s({error:"Invalid response ("+e+")"})}}}},ipinfodb:function(e){return{url:"//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",isScript:!0,callback:function(e,t){try{var i=JSON.parse(t);return"ERROR"==i.statusCode?s({error:i.statusMessage}):{code:i.countryCode}}catch(e){return s({error:"Invalid response ("+e+")"})}}}},maxmind:function(){return{url:"//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",isScript:!0,callback:function(e){return window.geoip2?void geoip2.country((function(t){try{e({code:t.country.iso_code})}catch(t){e(s(t))}}),(function(t){e(s(t))})):void e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))}}}}};return e.prototype.getNextService=function(){var e;do{e=this.getServiceByIdx(++this.currentServiceIndex)}while(this.currentServiceIndex<this.options.services.length&&!e);return e},e.prototype.getServiceByIdx=function(e){var i=this.options.services[e];if("function"==typeof i){var n=i();return n.name&&t.deepExtend(n,this.options.serviceDefinitions[n.name](n)),n}return"string"==typeof i?this.options.serviceDefinitions[i]():t.isPlainObject(i)?this.options.serviceDefinitions[i.name](i):null},e.prototype.locate=function(e,t){var i=this.getNextService();return i?(this.callbackComplete=e,this.callbackError=t,void this.runService(i,this.runNextServiceOnError.bind(this))):void t(new Error("No services to run"))},e.prototype.setupUrl=function(e){var t=this.getCurrentServiceOpts();return e.url.replace(/\{(.*?)\}/g,(function(i,n){if("callback"===n){var s="callback"+Date.now();return window[s]=function(t){e.__JSONP_DATA=JSON.stringify(t)},s}if(n in t.interpolateUrl)return t.interpolateUrl[n]}))},e.prototype.runService=function(e,t){var s=this;e&&e.url&&e.callback&&(e.isScript?i:n)(this.setupUrl(e),(function(i){var n=i?i.responseText:"";e.__JSONP_DATA&&(n=e.__JSONP_DATA,delete e.__JSONP_DATA),s.runServiceCallback.call(s,t,e,n)}),this.options.timeout,e.data,e.headers)},e.prototype.runServiceCallback=function(e,t,i){var n=this,s=t.callback((function(t){s||n.onServiceResult.call(n,e,t)}),i);s&&this.onServiceResult.call(this,e,s)},e.prototype.onServiceResult=function(e,t){t instanceof Error||t&&t.error?e.call(this,t,null):e.call(this,null,t)},e.prototype.runNextServiceOnError=function(e,t){if(e){this.logError(e);var i=this.getNextService();i?this.runService(i,this.runNextServiceOnError.bind(this)):this.completeService.call(this,this.callbackError,new Error("All services failed"))}else this.completeService.call(this,this.callbackComplete,t)},e.prototype.getCurrentServiceOpts=function(){var e=this.options.services[this.currentServiceIndex];return"string"==typeof e?{name:e}:"function"==typeof e?e():t.isPlainObject(e)?e:{}},e.prototype.completeService=function(e,t){this.currentServiceIndex=-1,e&&e(t)},e.prototype.logError=function(e){var t=this.currentServiceIndex,i=this.getServiceByIdx(t);console.warn("The service["+t+"] ("+i.url+") responded with the following error",e)},e}(),e.Law=function(){function e(e){this.initialise.apply(this,arguments)}var i={regionalLaw:!0,hasLaw:["AT","BE","BG","HR","CZ","CY","DK","EE","FI","FR","DE","EL","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","SK","ES","SE","GB","UK","GR","EU"],revokable:["HR","CY","DK","EE","FR","DE","LV","LT","NL","PT","ES"],explicitAction:["HR","IT","ES"]};return e.prototype.initialise=function(e){t.deepExtend(this.options={},i),t.isPlainObject(e)&&t.deepExtend(this.options,e)},e.prototype.get=function(e){var t=this.options;return{hasLaw:t.hasLaw.indexOf(e)>=0,revokable:t.revokable.indexOf(e)>=0,explicitAction:t.explicitAction.indexOf(e)>=0}},e.prototype.applyLaw=function(e,t){var i=this.get(t);return i.hasLaw||(e.enabled=!1,"function"==typeof e.onNoCookieLaw&&e.onNoCookieLaw(t,i)),this.options.regionalLaw&&(i.revokable&&(e.revokable=!0),i.explicitAction&&(e.dismissOnScroll=!1,e.dismissOnTimeout=!1)),e},e}(),e.initialise=function(i,n,s){var o=new e.Law(i.law);n||(n=function(){}),s||(s=function(){});var r=Object.keys(e.status),a=t.getCookie("cookieconsent_status");return r.indexOf(a)>=0?void n(new e.Popup(i)):void e.getCountryCode(i,(function(t){delete i.law,delete i.location,t.code&&(i=o.applyLaw(i,t.code)),n(new e.Popup(i))}),(function(t){delete i.law,delete i.location,s(t,new e.Popup(i))}))},e.getCountryCode=function(t,i,n){t.law&&t.law.countryCode?i({code:t.law.countryCode}):t.location?new e.Location(t.location).locate((function(e){i(e||{})}),n):i({})},e.utils=t,e.hasInitialised=!0,window.cookieconsent=e}}(window.cookieconsent||{})}]);