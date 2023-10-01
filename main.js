'use strict'

const number = document.getElementById('outputNumber');
const sNumber = document.getElementById('sNumber');
const doNumber = document.getElementById('doNumber'); 
const myFavoriteButton = document.getElementById('start');
const myFavoriteButton2 = document.getElementById('stop');
const myFavoriteButton3 = document.getElementById('console');


//Функция рандома 
myFavoriteButton.onclick = function(max, min, rand) { 
    max = Number(doNumber.value); 
    min = Number(sNumber.value); 
    rand = min + Math.random() * (max + 1 - min); 
    number.innerText = Math.floor(rand); 
    return; 
} 

myFavoriteButton2.onclick = function() {
    sNumber.value = '';
    doNumber.value = '';
}

myFavoriteButton3.onclick = function() {
    number.innerText = '0';
}













