'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ' 🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click',function(){
const guess = Number (document.querySelector('.guess').value);
    console.log(guess,typeof guess);
//so if there is no guess/number in the input 
//When there is no input
if(!guess){
    displayMessage('⛔ No Number!');
    // document.querySelector('.message').textContent = '⛔ No Number!';
//When player wins

} else if(guess === secretNumber){
    displayMessage(' 🎉 Correct Number!');
    // document.querySelector('.message').textContent = ' 🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    //In CSS we write multiple words background-color but in JS we write camelCase
    document.querySelector('body').style.backgroundColor = '#60B347';
document.querySelector('.number').style.width ='30rem';

if(score > highScore) {
    highScore = score;
       document.querySelector('.highscore').textContent=highScore;
}
//when the guess is wrong
}
else if(guess !== secretNumber){
    if(score > 1){
        displayMessage(guess > secretNumber? ' 📈 Too High!':'📉 Too low!');
        // document.querySelector('.message').textContent = guess > secretNumber? ' 📈 Too High!':'📉 Too low!';
     score--;
     document.querySelector('.score').textContent=score; 
 }else{
    displayMessage(' 🎇 You lost the game!');
    //  document.querySelector('.message').textContent = ' 🎇 You lost the game!';
     document.querySelector('.score').textContent=0; 
     }

}
//When guess is too high    
// } else if(guess > secretNumber) {
//     if(score > 1){
//        document.querySelector('.message').textContent = ' 📈 Too High!';
//     score--;
//     document.querySelector('.score').textContent=score; 
// }else{
//     document.querySelector('.message').textContent = ' 🎇 You lost the game!';
//     document.querySelector('.score').textContent=0; 
//     }
// //When guess is too low  
// } else if(guess < secretNumber) {
//     if(score > 1){
//         document.querySelector('.message').textContent = ' 📉 Too low!';
//     score--;
//     document.querySelector('.score').textContent=score;
//     }else{
//         document.querySelector('.message').textContent = ' 🎇 You lost the game!';
//     document.querySelector('.score').textContent=0;
//     }
    
// } 

}) ;
///Coding Challenge #1
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...');
    // document.querySelector('.message').textContent = 'Start guessing...';
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';

document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
});

