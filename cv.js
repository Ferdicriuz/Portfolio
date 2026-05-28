// THEME TOGGLE

const themeBtn = document.querySelector('.theme-toggle');

themeBtn.addEventListener('click', () => {

document.body.classList.toggle('light-mode');

const icon = themeBtn.querySelector('i');

if(document.body.classList.contains('light-mode')){

icon.classList.replace('fa-moon','fa-sun');

}else{

icon.classList.replace('fa-sun','fa-moon');

}

localStorage.setItem(
'cv-theme',
document.body.classList.contains('light-mode')
? 'light'
: 'dark'
);

});

// LOAD SAVED THEME

if(localStorage.getItem('cv-theme') === 'light'){

document.body.classList.add('light-mode');

themeBtn
.querySelector('i')
.classList.replace('fa-moon','fa-sun');

}

// REVEAL ANIMATION

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = '1';

entry.target.style.transform = 'translateY(0)';

}

});

},{threshold:.2});

const cards = document.querySelectorAll(
'.glass-card, .hero-card'
);

cards.forEach(card=>{

card.style.opacity='0';

card.style.transform='translateY(50px)';

card.style.transition='.8s ease';

observer.observe(card);

});

// FLOATING BLUR EFFECT

const blur1 = document.querySelector('.blur-1');

const blur2 = document.querySelector('.blur-2');

window.addEventListener('mousemove',(e)=>{

let x = e.clientX / 40;
let y = e.clientY / 40;

blur1.style.transform =
`translate(${x}px, ${y}px)`;

blur2.style.transform =
`translate(-${x}px, -${y}px)`;

});

// DOWNLOAD ANIMATION

const downloadBtn = document.querySelector(
'.fa-download'
);

downloadBtn.addEventListener('click',()=>{

downloadBtn.classList.add('fa-bounce');

setTimeout(()=>{

downloadBtn.classList.remove('fa-bounce');

},1000);

});

// ACTIVE GLOW EFFECT

const projectCards = document.querySelectorAll(
'.project-item'
);

projectCards.forEach(card=>{

card.addEventListener('mouseenter',()=>{

card.style.boxShadow =
'0 0 30px rgba(124,92,255,.3)';

});

card.addEventListener('mouseleave',()=>{

card.style.boxShadow = 'none';

});

});

const downloadBtn =
document.querySelector('.downloadBtn');

if(downloadBtn){

downloadBtn.addEventListener('click', () => {

downloadBtn.classList.add('downloading');

setTimeout(() => {

downloadBtn.classList.remove('downloading');

}, 1500);

});

}