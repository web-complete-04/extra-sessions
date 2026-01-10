const players = [
    {
        name: 'Ion',
        avatarType: 'bottts',
        score: 10
    },
    {
        name: 'Maria',
        avatarType: 'adventurer',
        score: 35
    },
    {
        name: 'Ana',
        avatarType: 'adventurer',
        score: 99
    },
    {
        name: 'Costică',
        avatarType: 'bottts',
        score: 13
    }
];

const cardsContainer = document.querySelector('#players-cards');

function playerCardFactory(player) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardsContainer.append(cardDiv);

    const avatar = document.createElement('img');
    avatar.src = `https://api.dicebear.com/9.x/${player.avatarType}/svg?seed=${player.name}`;
    avatar.classList.add('avatar');
    cardDiv.append(avatar);

    const cardHeading = document.createElement('h2');
    cardHeading.textContent = player.name
    cardDiv.append(cardHeading);

    const scoreDiv =  document.createElement('div');
    cardDiv.append(scoreDiv);

    const currentScoreText = document.createTextNode('Player score:')
    scoreDiv.append(currentScoreText);

    const currentScoreSpan = document.createElement('span');
    currentScoreSpan.classList.add('player-score');
    currentScoreSpan.textContent = player.score;
    scoreDiv.append(currentScoreSpan);

    return cardDiv;
}

// players.forEach(p => playerCardFactory(p))

const playersCards = players.map(p => playerCardFactory(p));
console.log(playersCards);

