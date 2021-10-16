'use strict';


// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
//
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
 document.querySelector('.check').addEventListener('click', function(){
  let guess =  Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if there is no no at all
  if (!guess) {
    document.querySelector('.message').textContent = "🚫 No Number!";
    // if there is any number 
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 👍';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#54A93C';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

  } else if(guess !== secretNumber) {
    document.querySelector('.message').textContent = guess > secretNumber ? 'Too High 🎡' : 'Too Low 👇';
    score--;
    document.querySelector('.score').textContent = score;

  } else {
    document.querySelector('.message').textContent = 'You Loose The Game 😔';
    document.querySelector('.score').textContent = 0;
  }
  
  
  // else if (guess > secretNumber) {
  //   document.querySelector('.message').textContent = "Too High 🎡";
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = "You Loose The Game 😔";
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = "Too Low 👇";
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = "You Loose The Game 😔";
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // document.querySelector('.highscore').textContent = score;
});

// implimenting again button

document.querySelector('.again').addEventListener('click', function(){
  document.querySelector('.score').textContent = 20;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('.guess').value = "";
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = "";
});