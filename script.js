const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click",() => {
    navbarLinks.classList.toggle("active");
});

/*
const intro = document.querySelector(".intro");
const video = document.querySelector("video");

const section = document.querySelector("section");

const controller = new ScrollMagic.Controller();




const scene = new ScrollMagic.Scene({
    duration:5000,
    triggerElmnt: intro,
    triggerHook:0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

var scrollValue = document.getElementById('scrollValue');
window.addEventListener('scroll',(event) => {
    let scroll = this.scrollY;
    console.log("scroll")
})

video.currentTime = scroll;
*/