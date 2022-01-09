

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
<!-- End Section 4 (Apple watch) --> */

/* <!-- Section 5 (AirPods) -->
<!-- End Section 5 (Airpods) --> */

/* <!-- Section 6 (Contact Us) -->
<!-- End Section 6 (Contact Us) --> */