const themeBtn =
document.querySelector('.theme-toggle');

// LOAD SAVED THEME

if(localStorage.getItem('theme') === 'light'){

document.body.classList.add('light-mode');

themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}

// TOGGLE

themeBtn.addEventListener('click', () => {

document.body.classList.toggle('light-mode');

const isLight =
document.body.classList.contains('light-mode');

if(isLight){

themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';

localStorage.setItem('theme', 'light');

}else{

themeBtn.innerHTML =
'<i class="fa-solid fa-moon"></i>';

localStorage.setItem('theme', 'dark');

}

});

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

const downloadButton =
document.querySelector('.downloadBtn');

if(downloadButton){

downloadButton.addEventListener('click', () => {

downloadButton.classList.add('downloading');

setTimeout(() => {

downloadButton.classList.remove('downloading');

}, 1500);

});

}