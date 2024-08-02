//Navbar behavior while scroll
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 70)
})

//success scroll
document.addEventListener('DOMContentLoaded', function () {
    const reel = document.querySelector('.success-reel');
    const clone = reel.innerHTML;
    reel.innerHTML += clone;
});

//Menu btn
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbtn = document.querySelector('.nav-btn');

    menuIcon.addEventListener('click', function(event) {
        navbtn.classList.toggle('active');
        event.stopPropagation();
    });

    document.addEventListener('click', function() {
        navbtn.classList.remove('active');
    });

    window.addEventListener('scroll', function() {
        navbtn.classList.remove('active');
    });
});