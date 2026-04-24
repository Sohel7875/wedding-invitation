(function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

/**
 *
 * Despite so many new Bollywood and English song options, I prefered to use two-decade-old song, Din Shagna Da!
 *
 * Ever attended a North Indian Wedding? As soon as the DJ plays Din Shagna Da song, it means that the much-awaited moment is here
 * and the bride is all set to put her first foot forward to the wedding venue under a breathtaking phoolon ki chaadar.
 * Let's keep the sky-high status of this song untouched!
 *
 * When the website is backed up with a soul-stirring track, the feeling becomes absolutely surreal. 
 * Choose a heart-touching track! 🎵 ❤️
 *
 * Listen here: https://youtu.be/X0MDALpV29s
 *
 */
$(document).on('scroll', function () {
    document.getElementById("my_audio").play();
});

let isWalimaOpen = false;
let isAnimating = false;
let lastScrollY = 0;

/* THROTTLE FUNCTION */
function throttle(fn, wait) {
    let lastTime = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastTime >= wait) {
            lastTime = now;
            fn.apply(this, args);
        }
    };
}

/* MAIN SCROLL HANDLER */
const handleScroll = throttle(() => {
    if (isAnimating) return;

    const scrollY = window.scrollY;
    const trigger = window.innerHeight * 0.6;

    /* OPEN */
    const currentScroll = window.scrollY;
    const scrollingDown = currentScroll > lastScrollY;

    if (scrollingDown && currentScroll > trigger && !isWalimaOpen && !isAnimating) {
        isAnimating = true;
        isWalimaOpen = true;

        document.body.classList.add("no-scroll");
        document.body.classList.add("transition-active");

        setTimeout(() => {
            const walima = document.getElementById("walimaSection");
            walima.scrollTo({ top: 120 });
            isAnimating = false;
        }, 900);
    }

    lastScrollY = currentScroll;

    if (scrollY < trigger * 0.6 && isWalimaOpen) {
        isAnimating = true;
        isWalimaOpen = false;

        document.body.classList.remove("transition-active");

        setTimeout(() => {
            document.body.classList.remove("no-scroll");
            isAnimating = false;
        }, 800);
    }

}, 100); 

const walima = document.getElementById("walimaSection");

walima.addEventListener("scroll", () => {
    if (walima.scrollTop <= 20 && isWalimaOpen && !isAnimating) {
        isAnimating = true;
        isWalimaOpen = false;

        /* CLOSE WALIMA */
        document.body.classList.remove("transition-active");

        /* 👇 RESET NIKAH SCROLL */
        window.scrollTo({
            top: 0,
            behavior: "instant" // important (no animation conflict)
        });

        setTimeout(() => {
            document.body.classList.remove("no-scroll");
            isAnimating = false;
        }, 800);
    }
});

/* ATTACH */
window.addEventListener("scroll", handleScroll);

const particlesContainer = document.querySelector(".particles");

for (let i = 0; i < 25; i++) {
    const span = document.createElement("span");
    span.style.left = Math.random() * 100 + "%";
    span.style.animationDuration = (8 + Math.random() * 10) + "s";
    particlesContainer.appendChild(span);
}

// Set the date we're counting down to
var countDownDate = new Date("May 2, 2026 17:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML =
        "<div class='countdown'>" +
        "<div class='circle'><span>" + days + "</span><p>Days</p></div>" +
        "<div class='circle'><span>" + hours + "</span><p>Hours</p></div>" +
        "<div class='circle'><span>" + minutes + "</span><p>Minutes</p></div>" +
        "<div class='circle'><span>" + seconds + "</span><p>Seconds</p></div>" +
        "</div>";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

var walimaDate = new Date("May 4, 2026 19:30:00").getTime();

setInterval(function () {
    var now = new Date().getTime();
    var distance = walimaDate - now;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("walima-time").innerHTML =
        `<div class="countdown">
            <div class="circle"><span>${d}</span><p>Days</p></div>
            <div class="circle"><span>${h}</span><p>Hours</p></div>
            <div class="circle"><span>${m}</span><p>Minutes</p></div>
            <div class="circle"><span>${s}</span><p>Seconds</p></div>
        </div>`;
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

