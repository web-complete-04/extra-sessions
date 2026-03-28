

class DiceModel {
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

const d1 = new DiceModel();
console.log(`Initial value: ${d1.value}`);




let rolls = 0;

const intId = setInterval(() => {
    console.log(`Roll: ${++rolls}`);
    d1.roll();
    console.log(d1.value);

    if(rolls >= 6){
        clearInterval(intId);
    }

}, 2000)