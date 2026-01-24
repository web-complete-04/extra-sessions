// using a global variable to store the response code
let apiResponseCode;

fetch(`https://rickandmortyapi.com/api/character1/?name=rick&status=dead`)
    .then(res => {
        console.log('response received!');
        console.log(res);
        apiResponseCode = res.status;
        return res.json()
    })
    .then(data => {
        console.log('Body was parsed as JSON!')
        switch (apiResponseCode) {
            case 200:
                console.log('All good. DOM Should inform the user!');
                break;

            case 404:
                console.log('Resource not found. DOM Should inform the user!');
                break;
        
            default:
                console.log('Excecption that was not implemented. DOM Should inform the user!');
                break;
        }        
        console.log(data)
    })
    .catch(e => {
        console.log(`Some error during the fetch. DOM Should inform the user!`);
        console.log(e);
    })