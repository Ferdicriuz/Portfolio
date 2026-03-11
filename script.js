// ========================
// SMOOTH SCROLL
// ========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault()

const target = document.querySelector(this.getAttribute("href"))

if(target){
target.scrollIntoView({
behavior: "smooth"
})
}

})

})





// ========================
// DOWNLOAD BUTTON
// ========================

const downloadBtn = document.getElementById("download")

if(downloadBtn){

downloadBtn.onclick = () => {

alert("CV download coming soon 🚀")

}

}



// Mobile panel elements
const menuBtn = document.querySelector(".menu-btn")
const mobilePanel = document.querySelector(".mobile-panel")
const closeBtn = document.querySelector(".close-btn")

// Open mobile panel
menuBtn.onclick = () => {
  mobilePanel.classList.add("open")
}

// Close mobile panel (close icon)
closeBtn.onclick = () => {
  mobilePanel.classList.remove("open")
}

// Close mobile panel when a link is clicked
mobilePanel.querySelectorAll("a").forEach(link => {
  link.onclick = () => mobilePanel.classList.remove("open")
})
// ========================
// DARK MODE TOGGLE
// ========================

const toggles = document.querySelectorAll(".theme-toggle")

toggles.forEach(toggle => {

  const icon = toggle.querySelector("i")

  toggle.onclick = () => {

    document.body.classList.toggle("dark")

    const darkMode = document.body.classList.contains("dark")

    localStorage.setItem("theme", darkMode)

    icon.classList.toggle("fa-moon", !darkMode)
    icon.classList.toggle("fa-sun", darkMode)

  }

})

// Load saved theme
if(localStorage.getItem("theme") === "true"){
  document.body.classList.add("dark")

  document.querySelectorAll(".theme-toggle i").forEach(icon=>{
    icon.classList.replace("fa-moon","fa-sun")
  })
}

// ========================
// TYPING ANIMATION
// ========================

const typing = document.getElementById("typing")

if(typing){

const words = [
"React Developer",
"JavaScript Engineer",
"Frontend Specialist"
]

let i = 0
let j = 0
let current = ""
let deleting = false

function type(){

current = words[i]

typing.textContent = current.substring(0, j)

if(!deleting){

j++

if(j > current.length){

deleting = true
setTimeout(type, 1000)
return

}

}else{

j--

if(j === 0){

deleting = false
i++

if(i === words.length){
i = 0
}

}

}

setTimeout(type, 100)

}

type()

}



// ========================
// GITHUB PROJECT FETCH
// ========================

async function loadRepos(){

const container = document.getElementById("repos")

if(!container) return

const username = "ferdicriuz"

try{

const projects = [
{
name: "HOMA REST",
description: "HomaGrills Restaurant Website is a responsive restaurant web application built to showcase menu offerings, featured meals, and restaurant services. The project focuses on clean UI design, mobile responsiveness, and smooth user navigation using modern frontend technologies.",
github: "https://github.com/ferdicriuz/homarest",
live: "https://homagrills.vercel.app/"
},

{
name: "SWIFT",
description: "Swift is a modern e-commerce web application that demonstrates product catalog browsing, responsive design, and interactive user interface elements. The project focuses on clean UI, performance, and mobile-friendly design to simulate a real online shopping platform.",
github: "https://github.com/yourusername/swift",
live: "https://swift-seven-lake.vercel.app/"
},

{
name: "MY-GUESSING-GAME",
description: "A fun interactive guessing game where users try to guess a randomly generated number. Features dynamic feedback, scoring, and responsive design for an engaging experience on desktop and mobile devices.git add .",
github: "https://github.com/yourusername/MY-GUESSING-GAME",
live: "https://vercel.com/ferdicriuzs-projects/my-guessing-game/4gwf9miRU3fnFoYZDhS8BU6QTKmE"
},

{
name: "Chat App",
description: "Real-time chat application built with Socket.io, Node.js and modern UI.",
github: "https://github.com/yourusername/chat-app",
live: "https://chat-app.vercel.app"
}
]

const container = document.getElementById("repos")

projects.forEach(project => {

const div = document.createElement("div")

div.className = "project"

div.innerHTML = `
<h3>${project.name}</h3>
<p>${project.description}</p>

<div class="project-links">
<a href="${project.github}" target="_blank">
<i class="fab fa-github"></i>
</a>

<a href="${project.live}" target="_blank">
<i class="fas fa-globe"></i>
</a>
</div>
`

container.appendChild(div)

})

}catch(err){

container.innerHTML = "<p>Unable to load projects</p>"

}

}

loadRepos()



// ========================
// SCROLL REVEAL ANIMATION
// ========================

const fadeElements = document.querySelectorAll(".fade")

if(fadeElements.length > 0){

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

})

fadeElements.forEach(el => observer.observe(el))

}



const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  emailjs.sendForm("service_hd0j2mm", "template_bff3q0s", this)
    .then(() => {
      alert("Message sent successfully! 🚀");
      contactForm.reset();
    }, (error) => {
      alert("Oops! Something went wrong.", error);
    });
});