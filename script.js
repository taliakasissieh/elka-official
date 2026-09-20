const header=document.querySelector(".site-header"),menu=document.querySelector(".menu"),nav=document.querySelector("#nav");
addEventListener("scroll",()=>header.classList.toggle("fixed",scrollY>80),{passive:true});
menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");obs.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();
