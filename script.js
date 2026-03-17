
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// Close menu when a link is clicked (For better UX)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.remove("active");
    });
});
function toggleSideMenu() {
    const menu = document.getElementById("side-menu");
    if (menu.style.width === "200px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "200px";
    }
            }
function toggleDropdown() {
    const menu = document.getElementById("dropdown-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
function toggleDropdown() {
    const menu = document.getElementById("dropdown-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
function revealOnScroll() {
    const elements = document.querySelectorAll('.hidden');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            element.classList.add('show');
        }
    });
}

// Run on scroll
window.addEventListener('scroll', revealOnScroll);

// Run once on page load
revealOnScroll();
// Fix: Allow normal navigation for menu links
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (event) {
        const targetHref = this.getAttribute("href");
        if (!targetHref.startsWith("#") && this.getAttribute("target") !== "_blank") {
            event.preventDefault();
            document.getElementById("loader").style.display = "flex";
            setTimeout(() => {
                window.location.href = targetHref;
            }, 250);
        }
    });
});

// Fix: Close the mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.remove("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll('.recruitment-benefits, .recruitment-form');

    function checkScroll() {
        elements.forEach(el => {
            let position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});
const eventDate = new Date("May 15, 2026 12:00:00").getTime();

const countdown = setInterval(function(){

const now = new Date().getTime();
const distance = eventDate - now;

const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
const seconds = Math.floor((distance % (1000*60)) / 1000);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

if(distance < 0){

clearInterval(countdown);

document.getElementById("event-status").innerText =
"⚔ Event Started! Prepare for Battle.";

}

},1000);
