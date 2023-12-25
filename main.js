'use strict'

const number = document.getElementById('outputNumber');
const sNumber = document.getElementById('sNumber');
const doNumber = document.getElementById('doNumber'); 
const startButton = document.getElementById('startButton');
const restartValuesButton = document.getElementById('restartValuesButton');
const restartOutputButton = document.getElementById('restartOutputButton');


//Функция рандома 
startButton.onclick = function(max, min, rand) { 
    max = Number(doNumber.value); 
    min = Number(sNumber.value); 
    rand = min + Math.random() * (max + 1 - min); 
    number.innerText = Math.floor(rand); 
} 

restartValuesButton.onclick = function() {
    sNumber.value = '';
    doNumber.value = '';
}

restartOutputButton.onclick = function() {
    number.innerText = '0';
}













