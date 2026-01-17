console.log('Rick & Morty API Example');

let currentPage = 1;
let totalPages;

const caracterCardsContainer = document.querySelector('#characters-container');

const prevPageBtn = document.querySelector('#previous-page');
const nextPageBtn = document.querySelector('#next-page');

// when page is loaded, we load first page list
fetchApiCharactersList(currentPage);

nextPageBtn.addEventListener('click', () => {
    if(currentPage < 42){
        fetchApiCharactersList(++currentPage)
    }
});

prevPageBtn.addEventListener('click', () => {
    if(currentPage > 1){
        fetchApiCharactersList(--currentPage)
    }
});


/**
 * 
 */
function fetchApiCharactersList(page) {
    caracterCardsContainer.innerHTML = `
        <div class="spinner-border text-secondary m-auto mt-5" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>`;

    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response => response.json())
        .then(data => {
            caracterCardsContainer.innerHTML = '';
            data.results.forEach(character => createCharacterCard(character));

            if(!totalPages) {
                // it runs when totalPages is undefined (pn the first fetch)
                totalPages = data.info.pages;
                console.log(totalPages, typeof totalPages);
            }
        });
}


function createCharacterCard(character){
    const characterCard = document.createElement('div');
    characterCard.classList.add('card','m-2');
    characterCard.style.width = '18rem';
    caracterCardsContainer.append(characterCard);

    const cardImg = document.createElement('img');
    cardImg.src = character.image;
    cardImg.alt = `Picture of ${character.name}`;
    cardImg.classList.add('card-img-top');
    characterCard.append(cardImg);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    characterCard.append(cardBody);

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = character.name;
    cardBody.append(cardTitle);

    const statusSpan = document.createElement('span');
    const statusSpanClasses = ['badge'];
    switch (character.status) {
        case 'Alive':
            statusSpanClasses.push('text-bg-success');
            break;

        case 'Dead':
            statusSpanClasses.push('text-bg-danger');
            break;
    
        default:
            statusSpanClasses.push('text-bg-secondary');    
            break;
    }
    statusSpan.classList.add(...statusSpanClasses);
    statusSpan.textContent = character.status;
    cardBody.append(statusSpan);

    const detailsBtn = document.createElement('a')
    detailsBtn.classList.add('btn', 'btn-primary', 'd-block', 'mt-3');
    detailsBtn.textContent = 'Details';
    detailsBtn.href = '#';
    cardBody.append(detailsBtn);
}