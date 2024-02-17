let hamburger = document.querySelector(".hamburger")
let navbarAbout = document.querySelector(".navbar__about")
let navbar = document.querySelector(".navbar")
let navbarItem = document.querySelectorAll(".navbar__item")
let links = document.querySelectorAll("a")
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


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("-menu-open")
    navbarAbout.classList.toggle("active")
    let svg = document.querySelector(".svgClass")

    if (navbarAbout.classList.contains("active")) {
        svg.classList.add("svg2")
    } else {
        navbar.classList.remove("active")
    }
}

// function toggleMenu() {
//     let body = document.body
//     if (links.classList.contains("active")) {
//         body.classList.add("body__noscroll")
//     } 
// }

links.forEach(function(link) {
    link.addEventListener('click', function() {
        let body = document.body
        if (body.classList.contains("body__noscroll")) {
            body.classList.remove("body__noscroll")
        }
      // Hide the sidebar by removing a class
     navbarAbout.classList.remove("active");
     hamburger.classList.remove("-menu-open");
    });
});

