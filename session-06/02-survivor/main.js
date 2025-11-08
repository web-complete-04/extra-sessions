/**
 * We have a character that has a specifc skill of finding food:
 *  if his skill is 0, he NEVER finds food
 *  if his skill is 2, he has 20% chances of finding food
 *  if his skill is 5, he has 50% chances of finding food
 *  and so on...
 *  if his skill is 10, he ALWAYS finds food
 */

console.log('Survivor');

const characterName = 'Petrică';
const characterSkill = 5;
let characterHitPoints = 50;

let daysPassed = 1;
while (daysPassed <= 10) {
    console.log('');
    console.log(`Day ${daysPassed} starts.. 🌞`);
    
    const diceRoll = Math.floor(Math.random() * 10) + 1;
    
    if(diceRoll <= characterSkill){
        console.log(`${characterName} rolls ${diceRoll} and finds food!`);
        characterHitPoints = characterHitPoints + 10;
        //characterHitPoints += 10;
    }
    else {
        console.log(`${characterName} rolls ${diceRoll} and is starving!`);
        characterHitPoints = characterHitPoints - 10;
        //characterHitPoints -= 10;
    }   

    console.log(`${characterName} current hit points: ${characterHitPoints}.`);
    
    
    daysPassed++;
}

