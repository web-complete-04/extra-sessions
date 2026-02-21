export default class PlayerCard {
    #domInstance;

    constructor(parentElem, player){
        this.parentElem = parentElem;
        this.player = player;
        this.#domInstance = this.createDomCard();
    }

    getDomInstance(){
        return this.#domInstance;
    }

    createDomCard(){
        const card = document.createElement('div');
        card.classList.add('player-card')
        this.parentElem.append(card);

        const avatar = document.createElement('div');
        avatar.classList.add('avatar');
        avatar.textContent = this.player.avatar;
        avatar.style.borderColor = this.player.color;
        card.append(avatar);

        const cardTitle = document.createElement('h2');
        cardTitle.textContent = this.player.name;
        card.append(cardTitle);

        this.score = document.createElement('div');
        this.score.classList.add('score');
        this.score.textContent = this.player.score;
        card.append(this.score);

        return card;
    }

    update(){
        this.score.textContent = this.player.score;
    }
}