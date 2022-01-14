function change1(){
  document.getElementById("12ProMax").src="./img/12-Pro-Max-Silver.webp";
 }
function change2(){
  document.getElementById("12ProMax").src="./img/12-Pro-Max-Graphite.webp";
}
function change3(){
  document.getElementById("12ProMax").src="./img/12-Pro-Max-Gold.webp";
}
function change4(){
  document.getElementById("12ProMax").src="./img/12-Pro-Max-Sierra-Blue.webp";
}

let liSixFour = document.querySelector('#sixFour');
let lioneTwoEight = document.querySelector('#oneTwoEight');
let litwoFiveSix = document.querySelector('#twoFiveSix');
let lifiveOneTwo = document.querySelector('#fiveOneTwo');
let priceP = document.querySelector('#ichoose__price-inner');

liSixFour.addEventListener('click', ()=>{
  priceP.innerText = '$1350.00'
});
lioneTwoEight.addEventListener('click', ()=>{
  priceP.innerText = '$1470.00'
});
litwoFiveSix.addEventListener('click', ()=>{
  priceP.innerText = '$1530.00'
});
lifiveOneTwo.addEventListener('click', ()=>{
  priceP.innerText = '$1620.00'
});