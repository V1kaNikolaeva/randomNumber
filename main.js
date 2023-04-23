'use strict'

// let intervalId;
const number = document.getElementById('outputNumber');
const sNumber = document.getElementById('sNumber');
const doNumber = document.getElementById('doNumber'); 
 
//Функция рандома 
const main = (max, min, rand) => { 
    max = Number(doNumber.value); 
    min = Number(sNumber.value); 
    rand = min + Math.random() * (max + 1 - min); 
    number.innerText = Math.floor(rand); 
    return; 
} 
 
//Запуск функции рандома 
const start = () => { 
    // intervalId = setInterval(main, 1000);
    main();
    console.log('Интервал запущен'); 
}

// const stop = () => {
//     clearInterval(intervalId);
//     console.log('Интервал очищен');
//     if (document.getElementById('start').addEventListener('click', start, { once: true })) {
//         const myFavoriteButton2 = document.getElementById('start').addEventListener('click', start, { once: false });
//     }
// }

const consoleClear = () => {
    console.clear();
    number.innerText = '0';
}

const stop = () => {
    sNumber.value = '';
    doNumber.value = '';
    console.log('очищен')
}

const myFavoriteButton = document.getElementById('stop');
myFavoriteButton.onclick = stop;

const myFavoriteButton2 = document.getElementById('start').addEventListener('click', start, { once: false }); //поставить true для одноразовго нажатия

const myFavoriteButton3 = document.getElementById('console');
myFavoriteButton3.onclick = consoleClear;









