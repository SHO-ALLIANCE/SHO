// Show loader when the page loads
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 250);
    }, 500);
};

// Show loader when clicking links
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
        if (this.getAttribute("href") !== "#" && this.getAttribute("target") !== "_blank") {
            event.preventDefault();
            document.getElementById("loader").style.display = "flex";
            setTimeout(() => {
                window.location.href = this.getAttribute("href");
            }, 1000);
        }
    });
});
