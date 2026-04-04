import { CountingDiceModel } from "./DiceModel.js";

const d1 = new CountingDiceModel();
console.log(`Initial value: ${d1.value}`);


const intId = setInterval(() => {
    d1.roll();
    console.log(`Roll: ${d1.rolls}: ${d1.value}`);

    if(d1.rolls >= 6){
        clearInterval(intId);
    }
}, 1000)