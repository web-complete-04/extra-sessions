export class DiceModel {
    constructor(sides = 6) {
        // object properties
        this.sides = sides;
        this.value = undefined;
        
        // initialization part
        this.roll();
    }

    // behavior
    roll() {
        this.value = Math.floor(Math.random() * this.sides) + 1;
    }
}


export class CountingDiceModel extends DiceModel {
    constructor(sides = 6) {
        super(sides); // call the inherited class constructor
        this.rolls = 0;  
    }

    // behavior
    roll() {
        console.log('calling  roll in CountingDiceModel');
        super.roll();   // call the inherited class roll method
        this.rolls++;
    }
}