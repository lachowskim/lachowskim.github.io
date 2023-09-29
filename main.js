const header = document.querySelector("header");
const main = document.querySelector("main");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.style.height = "60px"; // Resize the menu on scroll
    } else {
        header.style.height = "100px"; // Reset the menu height
    }
});

main.style.marginTop = header.clientHeight + "px"; // Adjust main content margin to prevent overlap
