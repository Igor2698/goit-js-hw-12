import{a as b,i as d,S as x}from"./assets/vendor-951421c8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const $="38581937-9c20710af1d4a9eb0308799a1",M="https://pixabay.com/api/",P=document.querySelector(".form"),g=document.querySelector(".gallery"),n=document.querySelector(".loader"),y=document.querySelector(".loadMoreButton");u(!1);l(!1);let p="",a=1,f=40;P.addEventListener("submit",k);async function k(e){e.preventDefault(),a=1,p=e.target.image.value,L(),u(!1),l(!0),g.innerHTML="",e.target.image.blur(),e.target.image.value="";const o=await m(p);h(o)}async function m(e){const o=new URLSearchParams({key:$,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:a});return(await b.get(`${M}?${o}&q=${e}`)).data}function h(e){if(u(e.hits.length>=f),!e.hits.length){d.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),l(!1);return}e.total<f&&v(),a===1&&d.success({position:"topRight",message:`Congratulations! We found ${e.total} images`,timeout:2e3}),l(!1),B(e.hits),new x(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}y.addEventListener("click",q);async function q(){a+=1,L(),l(!0),u(!1);const e=await m(p),o=Math.ceil(e.total/f);a>=o&&v(),h(e),R()}function B(e){const o=e.map(({webformatURL:i,largeImageURL:c,tags:t,likes:s,comments:r,downloads:w,views:S})=>`<li class='gallery-item'>
    <a class="gallery-link" href="${c}">
        <img class="gallery-image" src="${i}" alt="${t}" />
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
        <div class="lower-text">${r}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Downloads</div>
        <div class="lower-text">${w}</div>
      </span>
      </div>
        </a>
</li>`).join("");g.insertAdjacentHTML("beforeend",o)}function l(e){n.style.display=e?"block":"none"}function u(e){y.style.display=e?"block":"none"}function v(){d.error({position:"topRight",message:"We're sorry, there are no more posts to load"})}function R(){let o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}function L(){a===1?(n.style.top="40%",n.style.left="50%"):(n.style.top="85%",n.style.left="47%")}
//# sourceMappingURL=commonHelpers.js.map
