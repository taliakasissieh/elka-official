document.getElementById("year").textContent=new Date().getFullYear();
const header=document.querySelector(".header");
addEventListener("scroll",()=>{header.style.background=scrollY>50?"rgba(17,19,17,.96)":"transparent";header.style.position=scrollY>50?"fixed":"absolute"},{passive:true});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const id=a.getAttribute("href");if(id.length>1){const el=document.querySelector(id);if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"})}}}));
