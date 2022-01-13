

/* <!-- Section 2 (iPhone) -->
<!-- End Section 2 (iPhone) --> */

// /* <!-- Section 3 (Macbook Air) -->

//-initialize elements for Modal window

var modal = document.getElementById("myModal");
//var open = document.getElementById("buy");


//modal window
var buttons = document.getElementsByClassName("btn");

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;


//slider
const nextSlide = () => {
    const current = document.querySelector('.current');
    //remove current (active class)
    current.classList.remove('current');
    //check  for next one 
    if(current.nextElementSibling) {
        //Add current to nextSibling
        current.nextElementSibling.classList.add('current');
    }
    else {
        // go back to the first slide

        slides[0].classList.add('current');
    }

    setTimeout(() => current.classList.remove('current'));
};


const prevSlide = () => {
    const current = document.querySelector('.current');
    //remove current (active class)
    current.classList.remove('current');
    //check  for next one 
    if(current.previousElementSibling) {
        //Add current to nextSibling
        current.previousElementSibling.classList.add('current');
    }
    else {
        // go back to the first slide

        slides[slides.length - 1].classList.add('current');
    }

    setTimeout(() => current.classList.remove('current'));
};



// Button click

next.addEventListener('click', Element=>{
    nextSlide(); 
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
      }
});
prev.addEventListener('click', Element=> {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
      }
});
// Creating carusel

if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}


for(let i= 0; i<= buttons.length; i++) 
{
    buttons[i].onclick = () => {
        modal.style.display = "block";
    }
}
// close.onclick = () => {
//     modal.style.display = "none";
// }

function clos() {
    modal.style.display = "none";
}


// <!-- End Section 3 (Macbook Air) --> */

/* <!-- Section 4 (Apple watch) -->
*/
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');

}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


////////////////////////////////////////////////////////////////// 

let btnleft = document.querySelector('#btn-left');
let btnright = document.querySelector('#btn-right');
let slider = document.querySelector('#slider');

btnleft.onclick=() => {
    slider.scrollLeft -= 220; 
}
btnright.onclick=() => {
    slider.scrollLeft += 220; 
}

let sliderwidth = slider.scrollWidth - slider.clientWidth; 
function autoplay () {
if (slider.scroll > (sliderwidth -1)) {
slider.scrollLeft -= sliderwidth 
} else {
slider.scrollLeft += 1 
}
}

let play = setInterval( autoplay ,50)
let thumbails = document.getElementsByClassName('thumbail')
for (i=0; i<thumbails.length; i++){
thumbails[i].addEventListener('mouseover' , function(){
clearInterval(play)
})
thumbails[i].addEventListener('mouseout' ,function(){
return play = setInterval(autoplay ,50)
})
}
/*
<!-- End Section 4 (Apple watch) --> */

/* <!-- Section 5 (AirPods) -->
<!-- End Section 5 (Airpods) --> */

/* <!-- Section 6 (Contact Us) -->
<!-- End Section 6 (Contact Us) --> */