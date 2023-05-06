'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;

// document.querySelector('.message').textContent = 'Start guessing...';
// document.querySelector('.guess').value = '';
// document.querySelector('.message').textContent = '⛔ No Number!';
// document.querySelector('.message').textContent = '👇 Too Hight!';
// document.querySelector('.message').textContent = '👆 Too Low!';
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.score').textContent = score;
// document.querySelector('body').style.backgroundColor = '#2f9e44';

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = 'rgb(36, 36, 36)';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    document.querySelector('body').style.backgroundColor = 'rgb(36, 36, 36)';
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#2f9e44';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    document.querySelector('.message').textContent = '👇 Too Hight!';
    document.querySelector('body').style.backgroundColor = 'rgb(36, 36, 36)';
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = '😢 You Lost!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
    document.querySelector('.score').textContent = score;
  } else if (guess < number) {
    document.querySelector('.message').textContent = '👆 Too Low!';
    document.querySelector('body').style.backgroundColor = 'rgb(36, 36, 36)';
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = '😢 You Lost!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
    document.querySelector('.score').textContent = score;
  }
});
