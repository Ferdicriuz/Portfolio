"use strict"

document.querySelector(".menu-icon").addEventListener("click", function(){
const menuLinks = document.querySelector("#menunav");
const icon = document.querySelector("#bars");
menuLinks.classList.toggle("show");
icon.classList.toggle("fa-user-times");
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-icon");
    const closeButton = document.querySelector("#close-navbar");
    const menuOverlay = document.querySelector(".overlay");

    // Show menu when the bars icon is clicked
    menuButton.addEventListener("click", function () {
        menuOverlay.style.display = "flex";
    });

    // Hide menu when the close button is clicked
    closeButton.addEventListener("click", function () {
        menuOverlay.style.display = "none";
    });
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent instant jump
        let targetId = this.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjusts for fixed navbar
                behavior: "smooth" // Smooth animation
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".myname, .box1, .box2");

    let observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); // Add animation class
                    observer.unobserve(entry.target); // Stop observing once shown
                }
            });
        },
        { root: null, threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    elements.forEach(element => observer.observe(element));
});


// Show navbar when scrolling down
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("floating-navbar");

    if (window.scrollY > 100) {
        navbar.classList.add("show");
    } else {
        navbar.classList.remove("show");
    }
});

// Close navbar when clicking the close button
document.getElementById("close-navbar").addEventListener("click", function () {
    document.getElementById("floating-navbar").classList.remove("show");
});



document.getElementById("about-toggle").addEventListener("click", function () {
    let content = document.getElementById("about-content");

    // Toggle the 'show' class to slide down smoothly
    content.classList.toggle("show");
    content.style.transition = "0.3s ease";
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Add animation class
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of element is visible

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".animate-on-scroll");

    let observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); // Apply animation
                } else {
                    entry.target.classList.remove("show"); // Remove if needed
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    elements.forEach(el => observer.observe(el));
});


document.addEventListener("scroll", function () {
    let whatsappButton = document.querySelector(".whatsapp-float");
    let scrollPosition = window.scrollY + window.innerHeight;
    let documentHeight = document.documentElement.scrollHeight;

    // Hide button when at the bottom
    if (scrollPosition >= documentHeight - 50) {
        whatsappButton.classList.add("hidden");
    } else {
        whatsappButton.classList.remove("hidden");
    }
});
