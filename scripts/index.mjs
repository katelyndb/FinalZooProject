import { getAnimalInfo } from "./api.mjs";
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('#page-navigation');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove ('active')
}

const sr = scrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.home-text',{delay:350, origin: 'left'})
sr.reveal('.home-img', { delay: 350, origin: 'right' })


sr.reveal('#home, #schedule, #portfolio, #mapping',{delay:200, origin: 'bottom'})


// Gets the animal Info
var animalData = getAnimalInfo('frog');
// Displays the animal Info
console.log(animalData);
document.querySelector(".animalData").innerHTML = animalData;
