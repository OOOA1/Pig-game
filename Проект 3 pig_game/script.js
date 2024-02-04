'use strict';

const score0Element = document.querySelector('#score--0');
let score0 = document.querySelector('#current--0');
const score1Element = document.querySelector('#score--1');
let score1 = document.querySelector('#current--1');
const play = document.querySelector('.btn--roll');
const stop = document.querySelector('.btn--hold');
const active = document.querySelector('.player--active');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const restart = document.querySelector('.btn--new');
const winner = document.querySelector('.baner');


const dice = document.getElementById('diceG'); //Скрыть зарик
dice.classList.add('hidden');


let score0ElementNumber = score0Element.textContent = 0; //спин игрока 1
const score1ElementNumber = score1Element.textContent = 0; //спин игрока 2

stop.addEventListener('click', function() {
    if (player0.classList.contains('player--active')) {
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
    } else if (player1.classList.contains('player--active')) {
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
    }
});

//перезагрузить страницу

restart.addEventListener('click', function() {
    window.location.reload();
}) 

let array1 = [];
let array2 = [];
let x;
let y;
let i;
let u;
const win = 100;


let spin = Math.floor(Math.random(1,6)* (6 - 1) + 1);
console.log(spin);


play.addEventListener('click', function() {
    spin = Math.floor(Math.random(1,7)* (7 - 1) + 1);


    if (spin == 1) {
        dice.classList.remove('hidden');
        dice.src = 'dice1.png'
    } else if (spin == 2) {
        dice.classList.remove('hidden');
        dice.src = 'dice2.png'
    } else if (spin == 3) {
        dice.classList.remove('hidden');
        dice.src = 'dice3.png'
    } else if (spin == 4) {
        dice.classList.remove('hidden');
        dice.src = 'dice4.png'
    } else if (spin == 5) {
        dice.classList.remove('hidden');
        dice.src = 'dice5.png'
    } else if (spin ==6) {
        dice.classList.remove('hidden');
        dice.src = 'dice6.png'
    }

    if (player0.classList.contains('player--active')){
        score0Element.textContent = spin;
        if (player0.classList.contains('player--active') && spin >= 2) {
            array1.push(spin);
            console.log(array1);
        
            let sum1 = array1.map(i=>x+=i, x=0).reverse()[0];
            score0.textContent = sum1;
            if (sum1 >= win) {
                play.classList.add('hidden');
                stop.classList.add('hidden');
                winner.classList.remove('hidden');
                console.log('win');
            }
        } else if (spin = 1){
            array1 = [];
            score0.textContent = 0;
            player0.classList.remove('player--active');
            player1.classList.add('player--active');
        }
    } else if(player1.classList.contains('player--active')){
        score1Element.textContent = spin;
    
        if (player1.classList.contains('player--active') && spin >= 2) {
            array2.push(spin);
            console.log(array2);
    
            let sum2 = array2.map(u=>y+=u, y=0).reverse()[0];
            score1.textContent = sum2;
            if (sum2 >= win) {
                play.classList.add('hidden');
                stop.classList.add('hidden');
                winner.classList.remove('hidden');
                console.log('win');
            }
        } else if (spin = 1) {
            array2 = [];
            score1.textContent = 0;
            player1.classList.remove('player--active');
            player0.classList.add('player--active');
        }
    }
});

