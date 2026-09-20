const header=document.querySelector(".site-header"),menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav"),links=document.querySelectorAll(".nav-link");
function headerState(){header?.classList.toggle("scrolled",scrollY>40)}headerState();addEventListener("scroll",headerState,{passive:true});
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.classList.toggle("open",open);menu.setAttribute("aria-expanded",String(open));document.body.style.overflow=open?"hidden":""});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu?.classList.remove("open");menu?.setAttribute("aria-expanded","false");document.body.style.overflow=""}));
const reveal=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");reveal.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll(".reveal").forEach(e=>reveal.observe(e));
const sectionObserver=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.dataset.nav;links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+id))}}),{rootMargin:"-35% 0px -55% 0px"});document.querySelectorAll("[data-nav]").forEach(s=>sectionObserver.observe(s));
document.getElementById("contact-form")?.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget),text=`Hello ELKA,

My name is ${d.get("name")}.
Phone / WhatsApp: ${d.get("phone")}
Project type: ${d.get("project")}

Project details:
${d.get("message")}`;window.open("https://wa.me/962770022104?text="+encodeURIComponent(text),"_blank","noopener")});
const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
