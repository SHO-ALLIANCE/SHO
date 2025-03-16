// Show loader when the page loads
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 125);
    }, 250);
};

// Show loader when clicking links
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
        if (this.getAttribute("href") !== "#" && this.getAttribute("target") !== "_blank") {
            event.preventDefault();
            document.getElementById("loader").style.display = "flex";
            setTimeout(() => {
                window.location.href = this.getAttribute("href");
            }, 250);
        }
    });
});
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
