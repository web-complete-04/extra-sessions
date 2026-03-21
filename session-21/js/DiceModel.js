import Observable from "./Observable.js";

export default class DiceModel extends Observable {
    constructor(name, sides = 6) {
        // call the inherited class constructor
        super();
        
        // the logic of the current object
        this.availableColors = ['white', 'black', 'red', 'blue', 'green'];
        this.name = name;
        this.sides = sides;
        this.value = undefined;
        this.color = this.availableColors[0];
    }

    roll() {
        // generate the random value
        this.value = Math.floor(Math.random() * this.sides) + 1;

        // generate random color
        const randomColorIndex = Math.floor(Math.random() * this.availableColors.length);
        this.color = this.availableColors[randomColorIndex];

        // all objects that are monitoring the change of the value property will be notified
        this.notifyObservers();

        return this.value;
    }
}