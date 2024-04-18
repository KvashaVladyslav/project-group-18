import{a as S,A as I,S as v,N as y,K as w,M as f,E as A,b as M,P as q}from"./assets/vendor-df1498d5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const P="https://portfolio-js.b.goit.study";async function O(){const i=`${P}/api/reviews`;return(await S.get(i)).data}async function $(e,t){const s=`${P}/api/requests`;try{return(await S.post(s,{email:e,comment:t})).data}catch(n){throw console.error("Error submitting request:",n),n}}const d=document.querySelector(".modal-phone-window"),j=document.querySelector(".open-mobile-menu-btn"),V=document.querySelector(".svg-close"),T=document.querySelector(".header-nav-menu-link"),u=document.querySelector(".menu-list"),C=document.querySelector(".open-mobile-order-btn-modal");C.addEventListener("click",()=>{d.classList.add("hidden")});const W=document.querySelectorAll(".link");W.forEach(e=>e.addEventListener("click",()=>{d.classList.add("hidden")}));T.addEventListener("click",()=>{u.classList.contains("visually-hidden")?u.classList.remove("visually-hidden"):u.classList.add("visually-hidden")});j.addEventListener("click",()=>{d.classList.remove("hidden")});V.addEventListener("click",()=>{d.classList.add("hidden")});const b="/project-group-18/assets/icons-71848feb.svg";new I(".about-me-title-container",{duration:1e3});const _=document.querySelectorAll(".about-me-item");_.forEach(e=>e.addEventListener("click",G));function z(e,t){const i=e.querySelector("use"),r=t.classList.contains("visually-hidden");t.classList.toggle("visually-hidden"),i.setAttribute("href",r?`${b}#icon-arrow-up`:`${b}#icon-arrow-down`)}function G(e){const t=e.currentTarget,r=t.closest(".about-me-item").querySelector(".about-me-paragraph-container");r&&(r.classList.toggle("active"),z(t,r))}const H=document.querySelector(".skills-section .swiper"),R=document.querySelector(".skills-btn-arrow-right");new v(H,{modules:[y,w,f],direction:"horizontal",spaceBetween:0,navigation:{nextEl:R},slidesPerView:2,initialSlide:1,breakpoints:{767:{slidesPerView:3},1440:{slidesPerView:6}},mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},loop:!0,allowTouchMove:!0,followFinger:!0,simulateTouch:!0});const x=new v(".project .swiper.project",{slidesPerView:1,speed:1200,direction:"horizontal",spaceBetween:32,navigation:{nextEl:".project .swiper-btn-next",prevEl:".project .swiper-btn-prev"},modules:[y,w,f,A,M,q],mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},effect:"cards",EffectCards:{perSlideOffset:8,perSlideRotate:2,rotate:!0,slideShadows:!0}}),D=document.querySelector(".project .swiper-btn-next"),K=document.querySelector(".project .swiper-btn-prev");K.addEventListener("keypress",e=>{e.key==="Enter"&&F()});D.addEventListener("keypress",e=>{e.key==="Enter"&&U()});function F(){x.on("keyPress",(e,t)=>{switch(t){case 13:e.slidePrev();break}})}function U(){x.on("keyPress",(e,t)=>{switch(t){case 13:e.slideNext();break}})}const Y=document.querySelectorAll(".accordion-faq");Y.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active")})});document.addEventListener("DOMContentLoaded",e=>{const t=()=>{document.querySelectorAll(".covers-item").forEach(o=>{o.style.animationPlayState="running"})},i=()=>{document.querySelectorAll(".covers-item").forEach(o=>{o.style.animationPlayState="paused"})};let r=new IntersectionObserver((n,o)=>{n.forEach(c=>{c.isIntersecting?t():i()})},{threshold:.1});const s=document.querySelector(".covers-section");r.observe(s)});const J=document.querySelector(".review-list");O().then(e=>{const t=new v(".reviews .swiper.reviews",{modules:[y,q,w,f],navigation:{nextEl:".reviews .swiper-btn-next",prevEl:".reviews .swiper-btn-prev"},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,invert:!0},pagination:!0,speed:1200,simulateTouch:!0,updateOnWindowResize:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1},1400:{slidesPerView:4,slidesPerGroup:1}}});J.insertAdjacentHTML("beforeend",X(e));const i=document.querySelector(".reviews .swiper-btn-next");document.querySelector(".reviews .swiper-btn-prev").addEventListener("keypress",o=>{o.key==="Enter"&&s()}),i.addEventListener("keypress",o=>{o.key==="Enter"&&n()});function s(){t.on("keyPress",(o,c)=>{switch(c){case 13:o.slidePrev();break}})}function n(){t.on("keyPress",(o,c)=>{switch(c){case 13:o.slideNext();break}})}});function Q(e){return`
            <li class="review-card swiper-slide">
                <img src="${e.avatar_url}" alt="avatar" class="img-avatar">
                <h3 class="author-name">${e.author}</h3>
                <p class="review-text">${e.review}</p>
            </li>
        `}function X(e){return e.map(t=>Q(t)).join("")}const g=document.querySelector(".modal-window"),E=document.querySelector(".backdrop"),Z=document.querySelector(".close-btn"),ee=document.querySelector(".modal-title"),te=document.querySelector(".modal-paragraf");class se{open(){g.classList.remove("hidden"),E.classList.remove("hidden")}close(){g.classList.add("hidden"),E.classList.add("hidden")}render(t,i){ee.innerHTML=t,te.innerHTML=i}bindEvents(){Z.addEventListener("click",()=>{this.close()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&this.close()})}}const p=new se,m=document.querySelector(".form-section"),a=document.querySelector('input[name="email"]'),ne=document.querySelector('input[name="comment"]'),h=document.querySelector(".success-text"),L=document.querySelector(".error-text");function re(){h.classList.remove("visually-hidden"),L.classList.add("visually-hidden")}function oe(){h.classList.add("visually-hidden"),L.classList.remove("visually-hidden")}function N(){h.classList.add("visually-hidden"),L.classList.add("visually-hidden")}ne.addEventListener("click",()=>{a.validity.valid?re():oe()});function k(){a.classList.remove("success"),a.classList.remove("error"),N()}a.addEventListener("click",()=>{N()});a.addEventListener("input",function(){this.validity.valid?(this.classList.remove("error"),this.classList.add("success")):(this.classList.remove("success"),this.classList.add("error"))});m.addEventListener("submit",async e=>{e.preventDefault();const{email:t,comment:i}=e.target.elements;try{const r=await $(t.value,i.value);r&&(p.render(r.title,r.message),p.open(),k(),m.reset())}catch(r){console.error("Error submitting request:",r),k(),m.reset()}});p.bindEvents();const l=document.querySelector(".scroll-btn");function B(){pageYOffset<150||window.innerWidth<768?l.classList.add("visually-hidden"):l.classList.remove("visually-hidden")}B();window.addEventListener("scroll",()=>{B()});window.addEventListener("resize",()=>{window.innerWidth<768?l.classList.add("visually-hidden"):l.classList.remove("visually-hidden")});
//# sourceMappingURL=commonHelpers.js.map
