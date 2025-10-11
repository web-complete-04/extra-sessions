console.log('Session 2 - random dice roll');
// settings
const maxRandomNumber = 3;

// implementation
const randomNr = Math.floor(Math.random() * maxRandomNumber) + 1;
console.log(randomNr);

let userNr = prompt(`Guess a number between 1 and ${maxRandomNumber}: `);
userNr = Number(userNr);

if (userNr === randomNr) {
    alert('You guessed the number 🏆!');
}
else {
    alert(`You lost 😿! The nuber was: ${randomNr}.`);
}