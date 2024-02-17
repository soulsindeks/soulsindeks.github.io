const hamburger = document.querySelector(".hamburger")
let navbarAbout = document.querySelector(".navbar__about")
let navbar = document.querySelector(".navbar")
let navbarItem = document.querySelectorAll(".navbar__item")
let links = document.querySelectorAll(".navbar__about a")
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
document.onclick = function(e){
    if (!hamburger.contains(e.target) && !navbarItem.contains(e.target)) {
        navbarItem.classList.remove("active")
        navbar.classList.remove("active")
    }
}

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

function toggleMenu() {
    let body = document.body
    body.classList.toggle('body__noscroll')
}

links.forEach(function(link) {
    link.addEventListener('click', function() {
      if (navbarAbout.classList.contains("active")) {
        navbarAbout.classList.remove("active")
        hamburger.classList.remove("-menu-open")
      }
      sidebar.style.display = 'none';
    });
  });


