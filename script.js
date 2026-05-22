// BURGER MENU

const burger = document.querySelector('.burger');

const mobileMenu = document.querySelector('.mobile-menu');

const closeMenu = document.querySelector('.close-menu');

burger.addEventListener('click', () => {

mobileMenu.classList.add('show-menu');

});

closeMenu.addEventListener('click', () => {

mobileMenu.classList.remove('show-menu');

});

// CLOSE MOBILE MENU

const mobileLinks = document.querySelectorAll('.mobile-menu a');

mobileLinks.forEach(link => {

link.addEventListener('click', () => {

mobileMenu.classList.remove('show-menu');

});

});

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
'theme',
document.body.classList.contains('light-mode')
? 'light'
: 'dark'
);

});

// LOAD SAVED THEME

if(localStorage.getItem('theme') === 'light'){

document.body.classList.add('light-mode');

themeBtn
.querySelector('i')
.classList.replace('fa-moon','fa-sun');

}

// CURSOR BLUR EFFECT

const blur = document.querySelector('.cursor-blur');

window.addEventListener('mousemove', (e) => {

blur.style.left = e.clientX - 150 + 'px';

blur.style.top = e.clientY - 150 + 'px';

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

const sections = document.querySelectorAll('.section');

sections.forEach(section=>{

section.style.opacity='0';

section.style.transform='translateY(80px)';

section.style.transition='.8s';

observer.observe(section);

});

// CONTACT FORM

const form = document.querySelector('.contact-form');

form.addEventListener('submit',(e)=>{

e.preventDefault();

const button = form.querySelector('button');

button.innerHTML = 'Sending...';

setTimeout(()=>{

button.innerHTML = 'Message Sent ✓';

form.reset();

},2000);

});