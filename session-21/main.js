console.log('MV Example');


class Dice {
    constructor(name, sides = 6){
        this.name = name;
        this.sides = sides;
        this.value = undefined;

        // the objects that need to be notified on change
        this.observers = [];

    }

    addObserver(newObserver){
        this.observers.push(newObserver);
    }

    notifyObservers(){
        this.observers.forEach(observer => observer.updateUI());
    }

    roll(){
        // generate the random value
        this.value = Math.floor(Math.random() * this.sides) + 1;

        // all objects that are monitoring the change of the value property will be notified
        this.notifyObservers();

        return this.value;
    }
}


class DiceView {
    constructor(parentDomElem, dice){
        this.dice = dice;

        const diceContainer = document.createElement('div');
        diceContainer.classList.add('dice-container');
        parentDomElem.append(diceContainer);

        const diceNameLabel = document.createElement('div');
        diceNameLabel.classList.add('dice-name');
        diceNameLabel.textContent = dice.name;
        diceContainer.append(diceNameLabel);

        const diceValueLabel = document.createElement('div');
        diceValueLabel.classList.add('dice-value');
        diceValueLabel.textContent = dice.value;
        diceContainer.append(diceValueLabel);

        this.diceValueLabel = diceValueLabel;
    }


    updateUI(){
        this.diceValueLabel.textContent = this.dice.value;
    }
}

const uiContainer = document.querySelector('#ui-container');

// instantiate the model
const d1 = new Dice('Dice 1 [6 sides]');
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
}, 2000)