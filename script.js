const header = document.getElementById("header")
const body = document.querySelector("body")
const html = document.querySelector("html")

body.onscroll = function (e) {
    if (html.scrollTop > header.offsetHeight * 2) {
        header.classList.add("showed")
    }
    else {
        header.classList.remove("showed")
    }
}