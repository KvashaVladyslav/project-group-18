import{a as S,A as M,S as p,N as v,K as y,M as w,E as A,b as O,P as q}from"./assets/vendor-cd35d773.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const P="https://portfolio-js.b.goit.study";async function $(){const i=`${P}/api/reviews`;return(await S.get(i)).data}async function j(e,t){const s=`${P}/api/requests`;try{return(await S.post(s,{email:e,comment:t})).data}catch(n){throw console.error("Error submitting request:",n),n}}const x=document.querySelector(".modal-phone-window"),V=document.querySelector(".open-mobile-menu-btn"),W=document.querySelector(".svg-close"),T=document.querySelector(".header-nav-menu-link"),a=document.querySelector(".menu-list"),C=document.querySelector(".open-mobile-order-btn-modal");C.addEventListener("click",()=>{f()});const _=document.querySelectorAll(".link");_.forEach(e=>e.addEventListener("click",()=>{f()}));T.addEventListener("click",()=>{a.classList.contains("visually-hidden")?z():H()});V.addEventListener("click",()=>{G()});W.addEventListener("click",()=>{f()});function z(){a.classList.add("active"),a.classList.remove("visually-hidden")}function H(){a.classList.add("visually-hidden"),a.classList.remove("active")}function G(){x.classList.remove("hidden"),document.body.style.overflow="hidden"}function f(){x.classList.add("hidden"),document.body.style.overflow="auto"}const L="/project-group-18/assets/icons-71848feb.svg";new M(".about-me-title-container",{duration:1e3});const R=document.querySelectorAll(".about-me-item");R.forEach(e=>e.addEventListener("click",K));function D(e,t){const i=e.querySelector("use"),r=t.classList.contains("visually-hidden");t.classList.toggle("visually-hidden"),i.setAttribute("href",r?`${L}#icon-arrow-up`:`${L}#icon-arrow-down`)}function K(e){const t=e.currentTarget,r=t.closest(".about-me-item").querySelector(".about-me-paragraph-container");r&&(r.classList.toggle("active"),D(t,r))}const F=document.querySelector(".skills-section .swiper"),U=document.querySelector(".skills-btn-arrow-right");new p(F,{modules:[v,y,w],direction:"horizontal",spaceBetween:0,navigation:{nextEl:U},slidesPerView:2,initialSlide:1,breakpoints:{767:{slidesPerView:3},1440:{slidesPerView:6}},mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},loop:!0,allowTouchMove:!0,followFinger:!0,simulateTouch:!0});const N=new p(".project .swiper.project",{slidesPerView:1,speed:1200,direction:"horizontal",spaceBetween:32,navigation:{nextEl:".project .swiper-btn-next",prevEl:".project .swiper-btn-prev"},modules:[v,y,w,A,O,q],mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},effect:"cards",EffectCards:{perSlideOffset:8,perSlideRotate:2,rotate:!0,slideShadows:!0}}),Y=document.querySelector(".project .swiper-btn-next"),J=document.querySelector(".project .swiper-btn-prev");J.addEventListener("keypress",e=>{e.key==="Enter"&&Q()});Y.addEventListener("keypress",e=>{e.key==="Enter"&&X()});function Q(){N.on("keyPress",(e,t)=>{switch(t){case 13:e.slidePrev();break}})}function X(){N.on("keyPress",(e,t)=>{switch(t){case 13:e.slideNext();break}})}const Z=document.querySelectorAll(".accordion-faq");Z.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active")})});document.addEventListener("DOMContentLoaded",e=>{const t=()=>{document.querySelectorAll(".covers-item").forEach(o=>{o.style.animationPlayState="running"})},i=()=>{document.querySelectorAll(".covers-item").forEach(o=>{o.style.animationPlayState="paused"})};let r=new IntersectionObserver((n,o)=>{n.forEach(c=>{c.isIntersecting?t():i()})},{threshold:.1});const s=document.querySelector(".covers-section");r.observe(s)});const ee=document.querySelector(".review-list");$().then(e=>{const t=new p(".reviews .swiper.reviews",{modules:[v,q,y,w],navigation:{nextEl:".reviews .swiper-btn-next",prevEl:".reviews .swiper-btn-prev"},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,invert:!0},pagination:!0,speed:1200,simulateTouch:!0,updateOnWindowResize:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1},1400:{slidesPerView:4,slidesPerGroup:1}}});ee.insertAdjacentHTML("beforeend",se(e));const i=document.querySelector(".reviews .swiper-btn-next");document.querySelector(".reviews .swiper-btn-prev").addEventListener("keypress",o=>{o.key==="Enter"&&s()}),i.addEventListener("keypress",o=>{o.key==="Enter"&&n()});function s(){t.on("keyPress",(o,c)=>{switch(c){case 13:o.slidePrev();break}})}function n(){t.on("keyPress",(o,c)=>{switch(c){case 13:o.slideNext();break}})}});function te(e){return`
            <li class="review-card swiper-slide">
                <img src="${e.avatar_url}" alt="avatar" class="img-avatar">
                <h3 class="author-name">${e.author}</h3>
                <p class="review-text">${e.review}</p>
            </li>
        `}function se(e){return e.map(t=>te(t)).join("")}const g=document.querySelector(".modal-window"),E=document.querySelector(".backdrop"),ne=document.querySelector(".close-btn"),re=document.querySelector(".modal-title"),oe=document.querySelector(".modal-paragraf");class ie{open(){g.classList.remove("hidden"),E.classList.remove("hidden")}close(){g.classList.add("hidden"),E.classList.add("hidden")}render(t,i){re.innerHTML=t,oe.innerHTML=i}bindEvents(){ne.addEventListener("click",()=>{this.close()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&this.close()})}}const m=new ie,u=document.querySelector(".form-section"),l=document.querySelector('input[name="email"]'),ce=document.querySelector('input[name="comment"]'),h=document.querySelector(".success-text"),b=document.querySelector(".error-text");function ae(){h.classList.remove("visually-hidden"),b.classList.add("visually-hidden")}function le(){h.classList.add("visually-hidden"),b.classList.remove("visually-hidden")}function B(){h.classList.add("visually-hidden"),b.classList.add("visually-hidden")}ce.addEventListener("click",()=>{l.validity.valid?ae():le()});function k(){l.classList.remove("success"),l.classList.remove("error"),B()}l.addEventListener("click",()=>{B()});l.addEventListener("input",function(){this.validity.valid?(this.classList.remove("error"),this.classList.add("success")):(this.classList.remove("success"),this.classList.add("error"))});u.addEventListener("submit",async e=>{e.preventDefault();const{email:t,comment:i}=e.target.elements;try{const r=await j(t.value,i.value);r&&(m.render(r.title,r.message),m.open(),k(),u.reset())}catch(r){console.error("Error submitting request:",r),k(),u.reset()}});m.bindEvents();const d=document.querySelector(".scroll-btn");function I(){pageYOffset<300||window.innerWidth<768?d.classList.add("visually-hidden"):d.classList.remove("visually-hidden")}I();window.addEventListener("scroll",()=>{I()});window.addEventListener("resize",()=>{window.innerWidth<768?d.classList.add("visually-hidden"):d.classList.remove("visually-hidden")});
//# sourceMappingURL=commonHelpers.js.map
