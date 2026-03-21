import Observer from "./Observer.js";

export default class DiceView extends Observer {
    constructor(parentDomElem, dice) {
        super(dice);
        this.dice = dice;

        // create the container
        const diceContainer = document.createElement('div');
        diceContainer.classList.add('dice-container');
        parentDomElem.append(diceContainer);

        // create the element that displays the dice name
        const diceNameLabel = document.createElement('div');
        diceNameLabel.classList.add('dice-name');
        diceNameLabel.textContent = dice.name;
        diceContainer.append(diceNameLabel);

        // create the element that dispays the dice value
        const diceValueLabel = document.createElement('div');
        diceValueLabel.classList.add('dice-value');
        diceValueLabel.textContent = dice.value;
        diceContainer.append(diceValueLabel);

        this.diceValueLabel = diceValueLabel;
        this.addUpdatableElement(this.diceValueLabel, 'value');

        // create the element that displays the color value
        const colorLabel = document.createElement('div');
        colorLabel.classList.add('dice-color');
        colorLabel.textContent = dice.color;
        diceContainer.append(colorLabel);

        this.colorLabel = colorLabel;
        this.addUpdatableElement(this.colorLabel, 'color');
    }
}