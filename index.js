/* empty css                      */import{a as b,S as F,i as f}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const L="https://pixabay.com/api/",S="47526493-0201b9f5d9dd403f56de0598a";async function m(o,t=1,l=15){const{data:i}=await b(`${L}`,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:l}});return i}function y(o){return o.map(({webformatURL:t,largeImageURL:l,tags:i,likes:e,views:r,comments:n,downloads:g})=>`<li class="gallery-item">
            <a class="gallery-link" href="${l}">
                <img class="gallery-image" src="${t}" alt="${i}"/>
            </a>
                <ul class="inform">
                    <li class="inform-link">
                        <h2 class="inform-title">Likes:</h2>
                        <p class="inform-dan">${e}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Views:</h2>
                        <p class="inform-dan">${r}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Comments:</h2>
                        <p class="inform-dan">${n}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Downloads:</h2>
                        <p class="inform-dan">${g}</p>
                    </li>
                </ul>
            
    </li>`).join("")}const q=document.querySelector(".group-form"),u=document.querySelector(".gallery"),a=document.querySelector(".loader"),s=document.querySelector(".load-more");a.style.display="none";s.style.display="none";let c="",d=1;const p=15,h=new F(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});q.addEventListener("submit",w);s.addEventListener("click",k);function w(o){if(o.preventDefault(),c=o.target.elements.query.value.trim(),u.innerHTML=" ",!c){f.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}a.style.display="inline-block",m(c).then(t=>{console.log(t),t.hits.length===0&&f.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),u.insertAdjacentHTML("beforeend",y(t.hits)),h.refresh(),a.style.display="none",d*p<t.totalHits&&(s.style.display="inline-block")}).catch(t=>{console.log(t.message)}).finally(()=>o.target.reset())}async function k(){d+=1,s.disabled=!0,s.style.display="none",a.style.display="inline-block";try{const o=await m(c,d);console.log(o),u.insertAdjacentHTML("beforeend",y(o.hits)),h.refresh(),a.style.display="none",d*p>=o.totalHits&&f.info({message:"We're sorry, but you've reached the end of search results."}),s.style.display="inline-block";const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}catch(o){alert(o.message)}finally{s.disabled=!1}}
//# sourceMappingURL=index.js.map
