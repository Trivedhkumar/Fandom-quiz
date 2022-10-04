import chalk from "chalk";
import { question as _question } from 'readline-sync';
// questions Array
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
    answer: "Iraq"
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
// High scores array
const highScores = [
  {
    name: "Trived",
    score: 5
  },
  {
    name: "Koushik",
    score: 3
  },
]
// initial high score
let userScore = 0;
// welcoming user
const welcome = () => {
  const user = _question("What is your name?\n");

  console.log(chalk.hex("#FFFF00")(`Welcome ${user} to How well do you know world?`))
}
// play function
const play = (questionData) => {
  console.log('-------------------------')
  const { question, answer } = questionData;
  const userAnswer = _question(`${chalk.hex('#00FFD1')(question)}\n`);
  console.log(userAnswer)
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    userScore += 1;
    console.log(chalk.hex("#31C6D4")("Correct"));
  }
  else {
    console.log(chalk.hex("#FF1E1E")("Wrong"));
    console.log(chalk.hex("#00FFD1").bold(`The correct answer is ${answer}`))
  }
  console.log(`your current score is ${userScore}`)
}
// game start
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
const displayHighScores = () => {
  console.log(`High Scores:------------------------`);
  highScores.forEach(highScoreData => {
    console.log(chalk(chalk.bold.cyanBright(`${highScoreData.name} : ${highScoreData.score}`)))
  })
  console.log("If you are a high scorer take a snap and send I'll update the scores")
}
welcome();
startGame();
showScores();
displayHighScores();