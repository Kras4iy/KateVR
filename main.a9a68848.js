parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=t(e))){var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l,c=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,l=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw l}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var o=document.querySelectorAll(".faq__button"),r=document.querySelectorAll(".help__button"),l=document.getElementById("faq"),c=document.getElementById("help"),a=document.getElementById("help__cross"),i=document.getElementById("faq__cross"),s=document.querySelectorAll(".question__action"),u=document.querySelectorAll(".question__text"),d=document.querySelectorAll(".question__arrow"),m=document.querySelectorAll(".player__button"),_=document.getElementById("player"),y=document.getElementById("player__cross"),v=document.getElementById("mobile__menu"),f=document.getElementById("mobile__nav"),p=document.getElementById("mobile__cross"),b=document.querySelectorAll(".mobile__menu-item"),L=document.querySelector(".form"),g=document.querySelector(".page__body"),E=document.getElementById("mobile__button-buy"),h=document.getElementById("slider1"),q=document.querySelectorAll(".specs__link"),S=1;function I(e){var t=e.querySelector(".slider__wrapper"),n=e.querySelector(".slider__button-prev"),o=e.querySelector(".slider__button-next"),r=t.childElementCount-1,l=0;function c(e){document.querySelector(".about__img-counter").textContent=e+1+"/5"}o.addEventListener("click",function(){l>r-1&&(l=-1),l++,t.style.transform="translateX(-".concat(100*l,"%)"),c(l)}),n.addEventListener("click",function(){l<1&&(l=r+1),l--,t.style.transform="translateX(-".concat(100*l,"%)"),c(l)})}I(h);var k,w=e(o);try{for(w.s();!(k=w.n()).done;){var A=k.value;A.addEventListener("click",function(){l.classList.add("faq__active"),l.style.zIndex=""+S,S++})}}catch($){w.e($)}finally{w.f()}i.addEventListener("click",function(){l.classList.remove("faq__active"),l.style.zIndex="0",S--});var B,x=e(r);try{for(x.s();!(B=x.n()).done;){var z=B.value;z.addEventListener("click",function(){c.classList.add("help__active"),c.style.zIndex=""+S,S++})}}catch($){x.e($)}finally{x.f()}a.addEventListener("click",function(){c.classList.remove("help__active"),c.style.zIndex="0",S--});for(var M=function(e){s[e].addEventListener("click",function(){u[e].classList.toggle("question__text--active"),d[e].classList.toggle("question__arrow--active")})},T=0;T<s.length;T++)M(T);var j,C=e(m);try{for(C.s();!(j=C.n()).done;){var H=j.value;H.addEventListener("click",function(){window.matchMedia("(min-width: 1280px )").matches?_.classList.add("player__active"):window.open("https://youtu.be/zHINMzzwOkM","_blank")})}}catch($){C.e($)}finally{C.f()}y.addEventListener("click",function(){_.classList.remove("player__active")}),v.addEventListener("click",function(){f.classList.add("mobile__nav--active"),g.classList.add("page__stop-scroll"),E.classList.remove("page__buy--visible")}),p.addEventListener("click",function(){f.classList.remove("mobile__nav--active"),g.classList.remove("page__stop-scroll"),E.classList.add("page__buy--visible")}),L.addEventListener("submit",function(e){e.preventDefault(),L.reset(),window.scrollTo({top:0,behavior:"smooth"})});var O,X=e(b);try{for(X.s();!(O=X.n()).done;){var D=O.value;D.addEventListener("click",function(){f.classList.remove("mobile__nav--active"),g.classList.remove("page__stop-scroll"),E.classList.add("page__buy--visible")})}}catch($){X.e($)}finally{X.f()}for(var N=function(t){q[t].addEventListener("click",function(n){var o,r=document.querySelectorAll(".spec--mobile"),l=e(r);try{for(l.s();!(o=l.n()).done;){o.value.style.display="none"}}catch($){l.e($)}finally{l.f()}var c,a=e(q);try{for(a.s();!(c=a.n()).done;){c.value.innerHTML="+"}}catch($){a.e($)}finally{a.f()}q[t].innerHTML="-",(r=document.getElementById("spec".concat(t+1))).classList.add("specs__".concat(t+1,"--active")),r.style.display="block"})},U=0;U<q.length;U++)N(U);document.addEventListener("scroll",function(){document.documentElement.scrollTop>500?E.classList.remove("page__buy--visible"):E.classList.add("page__buy--visible")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.a9a68848.js.map