
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
