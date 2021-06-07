'use strict';

//selecting elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentPlayer1 = document.getElementById('current--0');
const currentPlayer2 = document.getElementById('current--1');
// starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

const  scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function() {
 document.getElementById(`current--${activePlayer}`).textContent = 0;
currentScore = 0;
activePlayer = activePlayer === 0 ? 1 :0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');

};
// rolling dice functionanlity
btnRoll.addEventListener('click',function(){
 if(playing) {
// 1. Generating a random dice roll
const dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);


 // 2. Display dice
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true, switch to next player
if(dice!= 1) {

 // add dice to current score
currentScore += dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
// currentPlayer1.textContent = currentScore; // this is only for 1st

} else{
// switch to next player
switchPlayer();
}
 }
});

btnHold.addEventListener('click',function(){
 if (playing) {
//1. add current score to active player's score
scores[activePlayer] +=  currentScore;
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

 //2 check if player's score is >= 100
if (scores[activePlayer] >= 100 ) {
 playing = false;
 document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
 document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
}else {
 //switch to the next player
  switchPlayer();
}
 }
});


btnNew.addEventListener('click',function(){
playing = true;
score0.textContent = 0;
score1.textContent = 0;
currentScore =0;
scores[0] =0;
scores[1]=0;
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
currentPlayer1.textContent = 0;
currentPlayer2.textContent = 0;
diceEl.classList.add('hidden');
})