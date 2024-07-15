import { showWelcome, getNumber, answer } from '../index.js';

const name = showWelcome();
console.log('What is the result of the expression?');

const operator = ['+', '-', '*'];
const getRandom = () => Math.floor(Math.random() * operator.length);
const getOperator = (number) => operator[number];

const playRound = () => {
  const num1 = getNumber(10);
  const num2 = getNumber(10);
  const number = getRandom();
  console.log(`Question: ${num1} ${getOperator(number)} ${num2}`);
  let correctAnswer;
  if (getOperator(number) === '+') {
    correctAnswer = num1 + num2;
  } else if (getOperator(number) === '-') {
    correctAnswer = num1 - num2;
  } else {
    correctAnswer = num1 * num2;
  }
  const userAnswer = Number(answer());
  return [userAnswer, correctAnswer];
};

// eslint-disable-next-line import/prefer-default-export
export const playGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const [userAnswer, correctAnswer] = playRound();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
