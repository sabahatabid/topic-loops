//Creating a lesson plan(using for loop)
// let myWork: Array<{name: string, status: boolean}>= [];

// for (let i = 1; i <= 10; i++) {
//     let lesson = {
//         name: `Lesson ${i}`,
//         status: i % 2 === 0 ? false : true
//     };
//     myWork.push(lesson);
// }

// console.log(myWork);

//Guessing Game(using while loop)
// let maxValue: number = 100;
// let randomNumber: number = Math.floor(Math.random() 
// *maxValue) + 1;
// console.log(`Random number: ${randomNumber}`);

// let isGuessCorrect: boolean = false;
// let guesses: number[] = [20, 50, 75, 30, 40, 60, 80, 90];

// let i: number = 0;
// while (!isGuessCorrect && i < guesses.length) {
//     let currentGuess: number = guesses[i];
//     if (currentGuess === randomNumber) {
//         isGuessCorrect = true;
//         console.log(`Congratulations! You guessed 
//         the correct number: ${randomNumber}`);
//     } else if (currentGuess < randomNumber) {
//         console.log(`Your guess is too low. Try again!`);
//     } else {
//         console.log(`Your guess is too high. Try again!`);
//     }
//     i++;
// }
//Counter Increment(using do while loop)
// let counter: number = 0;
// let step: number = 5;
// do {
//     console.log(`Counter: ${counter}`);
//     counter += step;
// } while (counter < 100);
//Exploring object(for loop)
// let myObject: { [key: string]: string } = {
//     item1: 'Value 1',
//     item2: 'Value 2',
//     item3: 'Value 3',
// };
// for (let property in myObject) {
//     console.log(`Property: ${property}, Value: ${myObject[property]}`);
// }
//Exploring Arrays with Loops(Using loop )
// let myArray: number[] = [];
// for (let i = 0; i < 10; i++) {
//     myArray.push(i + 1);
// }
// console.log(`myArray: ${myArray}`);
// for (let i = 0; i < myArray.length; i++) {
//     console.log(`Index: ${i}, Value: ${myArray[i]}`);
// }
// for (let value of myArray) {
//     console.log(`Value: ${value}`);
// }