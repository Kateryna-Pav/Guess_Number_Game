'use strict';

//game for guessing the number between 1 and 20

let secretNumber = Math.trunc(Math.random() * 20) + 1; //The maximum is inclusive and the minimum is inclusive

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeBackground = function (colour) {
  document.querySelector('body').style.backgroundColor = colour;
};

const showSecretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const showScore = function (currentScore) {
  document.querySelector('.score').textContent = currentScore;
};

const secretNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const guessNum = function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
    // when the player wins
  } else if (guess === secretNumber) {
    displayMessage('✔️ Correct Number!');
    changeBackground('#60b347');
    showSecretNumber(secretNumber);
    secretNumberWidth('30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      showScore(score);
    } else {
      displayMessage('❌ You lost the game');
      showScore(0);
    }
  }
};

document.querySelector('.check').addEventListener('click', guessNum);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') guessNum();
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  changeBackground('#222');
  showScore(score);
  showSecretNumber('?');
  secretNumberWidth('15rem');
  document.querySelector('.guess').value = null;
  console.log(secretNumber);
});

//console.log(secretNumber);
