console.log('Lottery...');

// how many types of elements do we have?
const randomOption = Math.floor(Math.random() * 10);

/*
if(randomOption === 0)
    alert('You won an icecream! 🍧');
else if (randomOption === 1)
    alert('You won a lollypop! 🍭');
else if (randomOption === 2)
    alert('You won a chocolate! 🍫');
else 
    alert('Better luck next time');
*/

/*
if(randomOption === 0){
    alert('You won an icecream! 🍧');
}
else {
    if (randomOption === 1) {
        alert('You won a lollypop! 🍭');
    }
    else {
        if (randomOption === 2){
            alert('You won a chocolate! 🍫');
        }
        else {
            alert('Better luck next time');
        }
    }
}
*/

/*
switch (randomOption) {
    case 0:
        alert('You won an icecream! 🍧');
        break;
    
    case 1: 
        alert('You won a lollypop! 🍭');
        break;
    
    case 2: 
        alert('You won a chocolate! 🍫');
        break;

    default:
         alert('Better luck next time');
        break;
}
*/

// the value of the prize variable is undefined
let prize;

switch (randomOption) {
    case 0:
        prize = '🍧';
        break;
    
    case 1: 
        prize = '🍭';
        break;
    
    case 2: 
        prize = '🍫';
        break;

    // for all the values besides 0, 1, 2 the value of prize remains undefined
    // in this case, the chance to get a price is much lower
}

if(prize === undefined){
    alert('Better luck next time! 😞');
}
else {
    alert(`You won: ${prize}`);
}