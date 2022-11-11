const sliderImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slider-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let slideWidth = sliderImage[0].clientWidth;
let numberOfImages = sliderImage.length;
let currentSlide = 0;

function init(){

    sliderImage.forEach((img, i) => {
        img.style.left=i * 100 + "%";
    });
    sliderImage[0].classList.add("active");
}
init();

// NEXT BUTTON

nextBtn.addEventListener("click", () => {
    if(currentSlide >= numberOfImages -1)
    {
        goToSlide(0);
        currentSlide = 0;
        return;
    }
    currentSlide++;
   goToSlide(currentSlide);
});

// NEXT BUTTON

prevBtn.addEventListener("click", () => {
    if(currentSlide <=0)
    {
        goToSlide(numberOfImages -1);
        currentSlide = numberOfImages -1;
        return;
    }
    currentSlide--;
   goToSlide(currentSlide);
});

function goToSlide(slideNumber){
    slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";

    setActiveClass();
}

function setActiveClass(){
    let currentActive = document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    sliderImage[currentSlide].classList.add("active")
}

function hide(){
    nextBtn.style.opacity='0'
    prevBtn.style.opacity='0'
}

function show(){
    nextBtn.style.opacity='1'
    prevBtn.style.opacity='1'
}

document
    .getElementById("slide-wrapper")
    .addEventListener("mouseout",hide);

document
    .getElementById("slide-wrapper")
    .addEventListener("mouseover",show);

