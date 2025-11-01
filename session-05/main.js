/*
    The player rolls 5 dice
    The game is won if the player rolls at least 3 dice having value 6
*/

console.log('Iterations');

let roll6 = 0;

let i = 1;
while (i <= 5) {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`Dice ${i} rolls: ${diceRoll}`);

    if(diceRoll === 6){
        roll6++
    }

    i++;
}

console.log(`You rolled 6: ${roll6} times.`);
if(roll6 >= 3){
    console.log('You WIN 🏆!');
}
else{
    console.log('You LOST 💔...');
}