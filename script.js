/* <!-- Section 1 (Showcase) -->
<!-- End Section 1 (Showcase) --> */

/* <!-- Section 2 (iPhone) -->
<!-- End Section 2 (iPhone) --> */

/* <!-- Section 3 (Macbook Air) -->
<!-- End Section 3 (Macbook Air) --> */

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