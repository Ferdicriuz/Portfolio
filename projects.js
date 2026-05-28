// ========================
// PROJECTS
// ========================

async function loadRepos() {

const container = document.getElementById("repos");

if (!container) {
console.log("Container not found");
return;
}

try {

const projects = [

{
name: "HOMA REST",

description:
"HomaGrills Restaurant Website is a responsive restaurant web application built to showcase menu offerings, featured meals, and restaurant services.",

github:
"https://github.com/Ferdicriuz/HOMAREST",

live:
"https://homagrills.vercel.app/",

stack: ["HTML", "CSS", "JavaScript"],

gradient: "gradient-4"
},

{
name: "STREAMLINE",

description:
"StreamLife Daily is a modern digital news and media platform designed to deliver real-time updates across technology, entertainment, sports, business, and global trends. Built with a clean responsive interface, the platform focuses on fast content delivery, smooth user experience, category-based news browsing, and mobile-first accessibility for readers across all devices."
,

github:
"https://github.com/Ferdicriuz/newsblog",

live:
"https://streamlinedaily.vercel.app/",

stack: ["React", "CSS", "JavaScript"],

gradient: "gradient-2"
},

{
name: "SWIFT",

description:
"Modern e-commerce application focused on responsive shopping experience and interactive UI design.",

github:
"https://github.com/Ferdicriuz/SWIFT",

live:
"https://swift-seven-lake.vercel.app/",

stack: ["React", "CSS", "JavaScript"],

gradient: "gradient-1"
},



{
name: "MY TODO APP",

description:
"Responsive React Todo application with task management and smooth user interactions.",

github:
"https://github.com/Ferdicriuz/My-Todo-App",

live:
"https://todo-app-five-rust-92.vercel.app/",

stack: ["React", "CSS", "JavaScript"],

gradient: "gradient-3"
}

];

// CLEAR EXISTING

container.innerHTML = "";

// LOOP PROJECTS

projects.forEach(project => {

const div = document.createElement("div");

div.className = "project-card";

div.innerHTML = `

<div class="project-top ${project.gradient}"></div>

<div class="project-content">

<h2>${project.name}</h2>

<p>${project.description}</p>

<div class="stack">

${project.stack.map(
tech => `<span>${tech}</span>`
).join("")}

</div>

<div class="project-links">

<a href="${project.github}" target="_blank">

<i class="fab fa-github"></i>

GitHub

</a>

<a href="${project.live}" target="_blank">

<i class="fas fa-globe"></i>

Live

</a>

</div>

</div>

`;

container.appendChild(div);

});

console.log("Projects loaded");

} catch (err) {

console.log(err);

container.innerHTML =
"<p>Unable to load projects</p>";

}

}

loadRepos();