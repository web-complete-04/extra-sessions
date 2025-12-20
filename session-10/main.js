/**
 * SPECS 
 *      - display a countdown timer starting from 3 
 *      - when the countdonwn reaches value 0, display a random option between: rock - paper - scissors
 *      - the output random option should be an image
 */

let countDown = 3;


const countDownMessageContainer =  document.querySelector('#countdown-msg-container');
const countDownDisplay = document.querySelector('#countdown-display');
const choiceOutputDOMElement =  document.querySelector('#display-random-choice');


function displayRandomChoiceImg(){
    const imgs = ['paper.jpg', 'rock.jpg', 'scissors.jpg'];

    // generate the random option
    const randomImgIndex = Math.floor(Math.random() * imgs.length);
    
    // show the image
    choiceOutputDOMElement.src = `imgs/${imgs[randomImgIndex]}`;
    choiceOutputDOMElement.classList.remove('hidden');
    
    // hide the countown message
    countDownMessageContainer.classList.add('hidden');
}


function decrementCountdown(){
    countDown--;

    // upate the UI countdown
    countDownDisplay.textContent = countDown;

    if(countDown === 0){
        clearInterval(intervalID);
        displayRandomChoiceImg();
    }
}

// setting up the interval
const intervalID = setInterval(decrementCountdown, 1000);

// set the initial UI countdown value
countDownDisplay.textContent = countDown;