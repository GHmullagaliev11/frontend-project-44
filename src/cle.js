import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getNumber = () => Math.round(Math.random() * 100);
const isEven = (number) => !(number % 2);

const playRound = () => {
  const number = getNumber();
  console.log(`Question: ${number}`);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer === correctAnswer;
};

// eslint-disable-next-line import/prefer-default-export
export const playGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = playRound();
    if (isCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
