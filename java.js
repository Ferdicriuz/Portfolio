"use strict"

document.querySelector(".menu-icon").addEventListener("click", function(){
const menuLinks = document.querySelector("#menu-links");
const icon = document.querySelector("#bars");
menuLinks.classList.toggle("show");
icon.classList.toggle("fa-user-times");
});
