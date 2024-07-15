import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const showWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const answer = () => readlineSync.question('Your answer: ');
export const getNumber = (num) => Math.round(Math.random() * num);
