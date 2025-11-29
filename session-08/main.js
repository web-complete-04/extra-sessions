console.log('Survivor, but using functions');

/*
    A character gets standed on an island. He has a name and a max HP (hit points)
    On starting the game, the character does not start with full HP (Actual starting HP should be random).
*/

// get the name of the character
// get the max HP of the character
// generate a random curent HP for the character (min currentHP should be 25% of max HP)

// maxHP: 100 => 25 .... 100
// maxHP: 120 => 30 .... 120
// maxHP: 200 => 50 .... 200


function characterFactory(defaultName = `Petrică`, defaultMaxHP = 100, defaultSkill = 5){
    const characterName = prompt(`Input the name of your character: `, defaultName);
    let maxHP = prompt(`Input the maximum HP of your character: `, defaultMaxHP);
    maxHP = parseInt(maxHP);
    
    const maxHPRemove = maxHP - Math.floor(maxHP * 0.25);
    const randomHPRemove = Math.floor(Math.random() * (maxHPRemove + 1)); // a random number between 0 and 75% of maxHP
    let currentHP = maxHP - randomHPRemove;

    let skill = prompt(`Input the skill level (between 0 - 10): `, defaultSkill);
    skill = parseInt(skill);

    return {
        "name": characterName,
        "maxHP": maxHP,
        "currentHP": currentHP, 
        "skill": skill
    }
}


function searchFood(skill){
    const diceRoll = Math.floor(Math.random() * 10); 
    return {
        "diceRoll": diceRoll,
        "findFood": diceRoll < skill
    }
}


//
//  MAIN PROGRAM
// 
const player = characterFactory('Cornelian');
console.log(player);

for (let i = 0; i < 10; i++) {
    console.log('');
    console.log(`DAY ${i + 1} STARTS!`);
    
    // player search for food
    const dailyFoodSearch =  searchFood(player.skill)
    
    console.log(`Dice roll: ${dailyFoodSearch.diceRoll}`);
    if(dailyFoodSearch.findFood) {
        console.log(`${player.name} finds food! 😃`);
    }
    else{
        console.log(`${player.name} is starving! 😟`);
    }
}
