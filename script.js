let micon = document.querySelector(".micon");
let nav = document.querySelector(".header-mid-right");
let closeIcon = document.querySelector(".closeIcon");
console.log(nav)
micon.addEventListener("click", () => {
    nav.classList.add("showNavMenu");
    // micon.classList.toggle("fa-close");

})
closeIcon.addEventListener("click", () => {
    nav.classList.remove("showNavMenu");
})

let passIcon = document.querySelector(".eyePosition");
console.log(passIcon)
    // passIcon.addEventListener("click", () => {
    //     alert()
    // })