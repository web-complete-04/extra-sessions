import PlayerCard from "./PlayerCard.js";

console.log('main.js loaded!');

const cardContainer = document.querySelector('#cards-container')

const players = [
    {
        name: 'Leonardo',
        avatar: '💠',
        color: 'blue',
        score: 0
    },
    {
        name: 'Donatello',
        avatar: '🍩',
        color: 'purple',
        score: 0
    },
    {
        name: 'Michelangelo',
        avatar: '🍎',
        color: 'red',
        score: 0
    }
];

const cards = players.map(player => new PlayerCard(cardContainer, player));

document.querySelector('button').addEventListener('click', () => {
    players.forEach((player, i) => {
        player.score += Math.floor(Math.random() * 6) + 1;
        cards[i].update();
    })
})




