console.log('Search for characters...');

const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', e => {
    e.preventDefault();

    let fetchUrl = new URL(`https://rickandmortyapi.com/api/character`);

    const formData = new FormData(searchForm);
    for(const [formField, value] of formData.entries()){
        if(value){
            fetchUrl.searchParams.set(formField, value);
        }
    }

    console.log(`Fetch from: ${fetchUrl.href}`);
})