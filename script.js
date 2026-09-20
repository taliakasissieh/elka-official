const root=document.documentElement,header=document.querySelector(".header"),nav=document.querySelector("#nav"),menu=document.querySelector("#menu"),lang=document.querySelector("#lang");
document.getElementById("year").textContent=new Date().getFullYear();
addEventListener("scroll",()=>header.classList.toggle("fixed",scrollY>70),{passive:true});
menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.07});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
function setLanguage(code){
 const ar=code==="ar"; root.lang=code; root.dir=ar?"rtl":"ltr";
 document.querySelectorAll("[data-en][data-ar]").forEach(el=>el.innerHTML=el.dataset[code]);
 lang.textContent=ar?"English":"العربية";
 localStorage.setItem("elkaLanguage",code);
 document.title=ar?"ELKA | المطابخ · الأثاث · مساحات المعيشة":"ELKA | Kitchens · Furniture · Living";
}
lang.addEventListener("click",()=>setLanguage(root.lang==="ar"?"en":"ar"));
setLanguage(localStorage.getItem("elkaLanguage")||"en");