window.onload = function () {
    fillColorSlider();
};

let sliderOne = document.getElementsByClassName("slider-1");
let sliderTwo = document.getElementsByClassName("slider-2");
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementsByClassName("slider-1").max;

function fillColorSlider() {
    let percent1 = (sliderOne.value / sliderMaxValue) * 100;
    let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
