const readLineSync = require('readline-sync');
const questions = [
  {
    question: "What is the largest country in South America?",
    answer: "Brazil"
  },
  {
    question: "What is the name of the world’s largest island?",
    answer: "Greenland"
  },
  {
    question: "What country ends with the letter Q?",
    answer: "Iraq "
  },
  {
    question: "How many countries are located in the Southern Hemisphere?",
    answer: "32"
  },
  {
    question: "Does Japan’s traffic run on the left or right?",
    answer: "Left"
  },
]
let userScore = 0;
const welcome = () => {
  const user = readLineSync.question("What is your name?\n");

  console.log(`Welcome ${user} to How well do you know world?`)
}
const play = (questionData) => {
  console.log('-------------------------')
  const { question, answer } = questionData;
  const userAnswer = readLineSync.question(`${question}\n`);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    userScore += 1;
    console.log("Correct");
  }
  else {
    console.log("Wrong");
  }
  console.log(`your current score is ${userScore}`)
}

const startGame = () => {
  if (!questions.length) {
    return console.log("No questions available right now");
  }
  questions.map(questionData => play(questionData))
}
function showScores() {
  if (userScore < 2) {
    console.log(`Sad you scored ${userScore} try again`)
  }
  else {

    console.log("YAY! You SCORED: ", userScore);
  }
}

welcome();
startGame();
showScores();