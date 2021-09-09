window.addEventListener('scroll', function() {
    var navbarSticky = document.querySelector('#navbar__sticky');
    navbarSticky.classList.add('sticky', window.scrollY > 'px');
});
// window.addEventListener('scroll', function() {
//     var navbarSticky = document.querySelector('navbar__sticky');
//     navbarSticky.classList.remove('sticky', window.scrollY > 'px');
// });


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
};