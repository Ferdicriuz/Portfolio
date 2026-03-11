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

const res = await fetch(
`https://api.github.com/users/${username}/repos?sort=updated`
)

const repos = await res.json()

repos.slice(0,6).forEach(repo => {

const div = document.createElement("div")

div.className = "project"

div.innerHTML = `
<h2>${repo.name}</h2>
<p >${repo.description || "No description available"}</p>

<div class="project-links">
  <a href="${repo.html_url}" target="_blank" title="View Code">
    <i class="fab fa-github"></i>
  </a>
  ${repo.homepage ? `<a href="${liveUrls[repo.name] || '#'}" target="_blank" title="Live Site">
  <i class="fas fa-globe"></i>
</a>` : ""}
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

const liveUrls = {
  "chat-app": "https://chat-app.vercel.app",
  "task-manager": "https://task-manager.vercel.app",
  "finance-tracker": "https://finance-tracker.vercel.app"
}