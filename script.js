let toTop = document.querySelector(".toTop");
let rootElement = document.documentElement;

function handleScroll() {
    let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.3) {
        toTop.classList.add("showBtn")
    } else {
        toTop.classList.remove("showBtn")
    }
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

toTop.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);


let hamburger = document.querySelector(".hamburger")
let navbarAbout = document.querySelector(".navbar__about")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active")
    navbarAbout.classList.toggle("active")
    navbarAbout.classList.toggle("menu__open")
}
