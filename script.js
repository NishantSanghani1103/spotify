let micon = document.querySelector(".micon");
let nav = document.querySelector(".header-mid-right");
console.log(nav)
micon.addEventListener("click", () => {
    nav.classList.toggle("showNavMenu");
    micon.classList.toggle("fa-close");

})