const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('.nav');menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
const langBtn=document.getElementById('langBtn');let lang='en';
function setLanguage(next){lang=next;document.documentElement.lang=lang==='bn'?'bn':'en';document.querySelectorAll('[data-en]').forEach(el=>{el.textContent=el.dataset[lang]});langBtn.textContent=lang==='en'?'বাংলা':'English';}
langBtn.addEventListener('click',()=>setLanguage(lang==='en'?'bn':'en'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();