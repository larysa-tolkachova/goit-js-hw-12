import{a as b,S as F,i as f}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const L="https://pixabay.com/api/",S="47526493-0201b9f5d9dd403f56de0598a";async function m(o,t=1,n=15){const{data:l}=await b(`${L}`,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:n}});return l}function y(o){return o.map(({webformatURL:t,largeImageURL:n,tags:l,likes:e,views:s,comments:a,downloads:h})=>`<li class="gallery-item">
            <a class="gallery-link" href="${n}">
                <img class="gallery-image" src="${t}" alt="${l}"/>
            </a>
                <ul class="inform">
                    <li class="inform-link">
                        <h2 class="inform-title">Likes:</h2>
                        <p class="inform-dan">${e}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Views:</h2>
                        <p class="inform-dan">${s}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Comments:</h2>
                        <p class="inform-dan">${a}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Downloads:</h2>
                        <p class="inform-dan">${h}</p>
                    </li>
                </ul>
            
    </li>`).join("")}const q=document.querySelector(".group-form"),u=document.querySelector(".gallery"),c=document.querySelector(".loader"),r=document.querySelector(".load-more");c.style.display="none";r.style.display="none";let d="",i=1;const p=15,g=new F(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});q.addEventListener("submit",w);r.addEventListener("click",k);function w(o){if(o.preventDefault(),d=o.target.elements.query.value.trim(),u.innerHTML=" ",!d){f.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}c.style.display="inline-block",m(d).then(t=>{console.log(t),t.hits.length===0&&f.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),i=1,u.insertAdjacentHTML("beforeend",y(t.hits)),g.refresh(),c.style.display="none",i*p<t.totalHits&&(r.style.display="inline-block")}).catch(t=>{console.log(t.message)}).finally(()=>o.target.reset())}async function k(){i+=1,r.disabled=!0,console.log(i),r.style.display="none",c.style.display="inline-block";try{const o=await m(d,i);console.log(o),u.insertAdjacentHTML("beforeend",y(o.hits)),g.refresh(),c.style.display="none",i*p>=o.totalHits?(r.style.display="none",f.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",timeout:1e4})):r.style.display="inline-block";const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}catch(o){alert(o.message)}finally{r.disabled=!1}}
//# sourceMappingURL=index.js.map
