const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
const links=[...document.querySelectorAll('.nav-link')];
const sections=[...document.querySelectorAll('[data-nav]')];
const reveals=[...document.querySelectorAll('.reveal')];
const dialog=document.querySelector('#project-dialog');
const dialogTitle=document.querySelector('#dialog-title');

document.querySelector('#year').textContent=new Date().getFullYear();

function closeMenu(){nav.classList.remove('open');document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false')}
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');document.body.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open))});
links.forEach(link=>link.addEventListener('click',closeMenu));

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}}),{threshold:.12});
reveals.forEach(el=>revealObserver.observe(el));

const navObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const id=entry.target.dataset.nav;links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${id}`))}})},{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(section=>navObserver.observe(section));

window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>40),{passive:true});

document.querySelectorAll('.project-open').forEach(btn=>btn.addEventListener('click',()=>{dialogTitle.textContent=btn.dataset.project;dialog.showModal()}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()});

document.querySelector('#contact-form').addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const message=`Hello ELKA, my name is ${data.get('name')}.%0A%0AProject: ${data.get('project')}%0APhone: ${data.get('phone')}%0A%0A${data.get('message')}`;
  window.open(`https://wa.me/962770022104?text=${message}`,'_blank','noopener');
});
