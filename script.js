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
