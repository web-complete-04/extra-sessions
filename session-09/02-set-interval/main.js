
const displayElem = document.querySelector('.counter-display');
const restartBtn =  document.querySelector('button');

let counter = 10;

function backwardsCounter() {
    counter--;
    console.log(counter);
    displayElem.textContent = counter;

    if(counter == 3){
        displayElem.classList.add('danger');
    }

    if (counter == 0) {
        console.log(`Timer stop for intervalID: ${counterIntervaID}!`);
        clearInterval(counterIntervaID);
    }
}

let counterIntervaID = setInterval(backwardsCounter, 1000);
console.log(`New interval created. intervalID: ${counterIntervaID}!`);


restartBtn.addEventListener('click', function(){
    clearInterval(counterIntervaID);
    console.log(`Timer stop for intervalID: ${counterIntervaID}!`);

    counter = 10;
    displayElem.classList.remove('danger');
    displayElem.textContent = counter; 

    counterIntervaID = setInterval(backwardsCounter, 1000);
    console.log(`New interval created. intervalID: ${counterIntervaID}!`);
});