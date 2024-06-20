import readlineSync from 'readline-sync';
import { showWelcome, getNumber } from '../index.js';

const name = showWelcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (number) => !(number % 2);

const playRound = () => {
  const number = getNumber(100);
  console.log(`Question: ${number}`);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');
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
