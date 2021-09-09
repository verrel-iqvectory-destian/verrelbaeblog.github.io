var slideCard = 1;
showSlides(slideCard);

function sliders(card) {
    showSlides(slideCard += card);
}

function btnNumbers(card) {
    showSlides(slideCard = card);
}

function showSlides(card) {
    var i;
    var slides = document.getElementsByClassName("stories__row-container");
    var paginationNumbers = document.getElementsByClassName("pagination-number");
    if (card > slides.length) {
        slideCard = 1;
    }
    if (card < 1) {
        slideCard = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < paginationNumbers.length; i++) {
        paginationNumbers[i].className = paginationNumbers[i].className.replace("active__pagination", "");
    }
    slides[slideCard - 1].style.display = "flex";
    paginationNumbers[slideCard - 1].className += " active__pagination";
}