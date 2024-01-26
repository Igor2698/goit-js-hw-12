import{a as S,i as p,S as b}from"./assets/vendor-951421c8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const x="38581937-9c20710af1d4a9eb0308799a1",$="https://pixabay.com/api/",M=document.querySelector(".form"),f=document.querySelector(".gallery"),n=document.querySelector(".loader"),g=document.querySelector(".loadMoreButton");u(!1);i(!1);let d="",a=1,y=40;M.addEventListener("submit",P);async function P(e){e.preventDefault(),a=1,d=e.target.image.value,v(),u(!1),i(!0),f.innerHTML="",e.target.image.blur(),e.target.image.value="";const o=await m(d);h(o)}async function m(e){const o=new URLSearchParams({key:x,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:a});return(await S.get(`${$}?${o}&q=${e}`)).data}function h(e){if(u(e.hits.length>=y),!e.hits.length){p.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),i(!1);return}i(!1),B(e.total),q(e.hits),new b(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}g.addEventListener("click",k);async function k(){a+=1,v(),i(!0),u(!1);const e=await m(d),o=Math.ceil(e.total/y);a>=o&&p.error({position:"topRight",message:"We're sorry, there are no more posts to load"}),h(e),R()}function q(e){const o=e.map(({webformatURL:l,largeImageURL:c,tags:t,likes:s,comments:r,downloads:L,views:w})=>`<li class='gallery-item'>
    <a class="gallery-link" href="${c}">
        <img class="gallery-image" src="${l}" alt="${t}" />
        <div class="gallery-description">
      <span class='gallery-span'>
        <div class="upper-text">Likes</div>
        <div class="lower-text">${s}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Views</div>
        <div class="lower-text">${w}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Comments</div>
        <div class="lower-text">${r}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Downloads</div>
        <div class="lower-text">${L}</div>
      </span>
      </div>
        </a>
</li>`).join("");f.insertAdjacentHTML("beforeend",o)}function i(e){n.style.display=e?"block":"none"}function u(e){g.style.display=e?"block":"none"}function B(e){a===1&&p.success({position:"topRight",message:`Congratulations! We found ${e} images`,timeout:2e3})}function R(){let o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}function v(){a===1?(n.style.top="40%",n.style.left="50%"):(n.style.top="85%",n.style.left="47%")}
//# sourceMappingURL=commonHelpers.js.map
