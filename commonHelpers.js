import{a as x,i as d,S as b}from"./assets/vendor-951421c8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const $="38581937-9c20710af1d4a9eb0308799a1",M="https://pixabay.com/api/",P=document.querySelector(".form"),f=document.querySelector(".gallery"),a=document.querySelector(".loader"),g=document.querySelector(".loadMoreButton");u(!1);i(!1);let p="",r=1,y=40;P.addEventListener("submit",k);async function k(e){e.preventDefault(),r=1,L(),u(!1),i(!0),f.innerHTML="",p=e.target.image.value;const o=await m(p);h(o)}async function m(e){const o=new URLSearchParams({key:$,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:r});return(await x.get(`${M}?${o}&q=${e}`)).data}function h(e){if(u(e.hits.length>=y),!e.hits.length){d.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),i(!1);return}i(!1),v(e.total),B(e.hits),new b(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}g.addEventListener("click",q);async function q(){r+=1,L(),i(!0),u(!1);const e=await m(p);v(e.total),h(e),R()}function B(e){const o=e.map(({webformatURL:l,largeImageURL:c,tags:t,likes:s,comments:n,downloads:w,views:S})=>`<li class='gallery-item'>
    <a class="gallery-link" href="${c}">
        <img class="gallery-image" src="${l}" alt="${t}" />
        <div class="gallery-description">
      <span class='gallery-span'>
        <div class="upper-text">Likes</div>
        <div class="lower-text">${s}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Views</div>
        <div class="lower-text">${S}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Comments</div>
        <div class="lower-text">${n}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Downloads</div>
        <div class="lower-text">${w}</div>
      </span>
      </div>
        </a>
</li>`).join("");f.insertAdjacentHTML("beforeend",o)}function i(e){a.style.display=e?"block":"none"}function u(e){g.style.display=e?"block":"none"}function v(e){const o=Math.ceil(e/y);if(r>=o&&r!==1)return d.error({position:"topRight",message:"We're sorry, there are no more posts to load"});if(r===1)return d.success({position:"topRight",message:`Congratulations! We found ${e} images`,timeout:2e3})}function R(){let o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}function L(){r===1?(a.style.top="40%",a.style.left="50%"):(a.style.top="85%",a.style.left="47%")}
//# sourceMappingURL=commonHelpers.js.map
