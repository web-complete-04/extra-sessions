/* start of code secttion that runs when the JS file is loaded */
const plusOneButton = document.querySelector('#plus-one');
const minusOneButton = document.querySelector('#minus-one');
const plusFiveButton = document.querySelector('#plus-five');
const minusFiveButton = document.querySelector('#minus-five');
const resetButton = document.querySelector('#reset');

const setValueTextbox = document.querySelector('#set-value-textbox'); 
const setValueBtn = document.querySelector('#set-value-btn'); 


const counterDisplay = document.querySelector('.counter-display');
let count = 0;

counterDisplay.textContent = count;
/* end o the code section that runs when the JS file is loaded */

function changeCounter(amount){
    return function () {
        console.log(`When Calling this "baby function" amount is: ${amount}`);
        count += amount; // count = count + (-1))
        counterDisplay.textContent = count;
    }
}

plusOneButton.addEventListener('click', changeCounter(1));
minusOneButton.addEventListener('click', changeCounter(-1));
plusFiveButton.addEventListener('click', changeCounter(5));
minusFiveButton.addEventListener('click', changeCounter(-5));

resetButton.addEventListener('click', function(){
    count = 0;
    counterDisplay.textContent = count;
});


setValueBtn.addEventListener('click', function(){
    let newValue = setValueTextbox.value;
    console.log(newValue, typeof newValue);

    count = Number(newValue);
    counterDisplay.textContent = count;
})