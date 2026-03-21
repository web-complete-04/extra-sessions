import DiceModel from "./DiceModel.js";
import DiceView from "./DiceView.js";


console.log('MV Example');

const uiContainer = document.querySelector('#ui-container');

// instantiate the model
const d1 = new DiceModel('Dice 1 [6 sides]');
console.log(d1.roll());

// instantiate the views
const dv1 = new DiceView(uiContainer, d1);
const dv2 = new DiceView(uiContainer, d1);

// make the views monitor the model
d1.addObserver(dv1);
d1.addObserver(dv2);

// change the model!
setInterval(() => {
    d1.roll();
    console.log(`${d1.name} last roll: ${d1.value}`);
    console.log(d1);
}, 3000)