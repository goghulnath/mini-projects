//Create a secret number
let secret = Math.trunc(Math.random() * 20) + 1;
 
//Keeping track of score
let score = 20;

//keeping track of last Highscore
let lastHighScore = 0;

//Getting elements ready
const guessElement = document.querySelector(".guess");
const messageElement = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".highscore");
const secretElement = document.querySelector(".secret");

let secretBox = document.querySelector(".secret-box");
//Function to display message
const displayMessage = function (message) {
  messageElement.textContent = message;
};

//Adding click event on "Check" button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(guessElement.value);
  console.log(typeof guess, guess);

  //For empty value
  if (!guess) {
    displayMessage("Number would be nice😄");
  }
  //Guess matches the secret number
  else if (guess === secret) {
    let currentScore = scoreElement.textContent;
    if (currentScore > lastHighScore) {
      lastHighScore = currentScore;
    }
    highScoreElement.textContent = lastHighScore;
    secretElement.textContent = secret;
    displayMessage("Guessed Correctly! You won!");
    guessElement.style.backgroundColor = "rgb(32, 195, 32)";
    secretBox.style.backgroundColor = "rgb(32, 195, 32)";
    secretElement.style.color = "white";
  } 
  else if(guess<0 || guess >20){
    displayMessage("Enter number between 1-20")
  }
  //Guess is less than the secret
  else if (score > 1) {
    score--;
    scoreElement.textContent = score;
    displayMessage(guess < secret ? "Too Low" : "Too High");
  } else {
    displayMessage("Game Over! You lost");
  }
});

document.querySelector('.play-again').addEventListener(
  'click',function(){
    secret = Math.trunc(Math.random() * 20) + 1;
    secretElement.textContent = secret;
    score = 20;
    scoreElement.textContent = score;
    guessElement.value =''; 
    secretElement.textContent = '?';
    guessElement.style.backgroundColor = "rgb(51, 88, 126)";
    secretBox.style.backgroundColor = "rgba(0, 0, 0, 0.096)";
});

document.querySelector('.reset-highscore').addEventListener(
  'click',function(){
    lastHighScore =0;
    highScoreElement.textContent = lastHighScore;
  }
)
