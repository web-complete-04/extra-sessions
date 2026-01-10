console.log('Creates a numebr of squares and change the background color on click');

/**
 * CONFIG
 */
const squares = 49;
const squaresWith = 80;


function createSquare(boxIndex){
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.textContent = boxIndex;
    newSquare.style.width = `${squaresWith}px`;
    squaresContainer.append(newSquare);
    
    return newSquare;
}


function createRandomColor() {
    const hexaChars = '0123456789abcdef';
    
    let randomHexaColor = '#';
    
    for (let i = 0; i < 6; i++) {
        const randomHexaChar = hexaChars.charAt(Math.floor(Math.random() * hexaChars.length));
        randomHexaColor += randomHexaChar;
        
    }
    
    return randomHexaColor;
}


/**
 * MAIN PROGRAM
 */
const squaresContainer = document.querySelector('.squares-container');
squaresContainer.style.width = `${squaresWith * Math.sqrt(squares)}px`;

for (let i = 1; i <=  squares; i++) {
    const newSquare = createSquare(i);
    newSquare.addEventListener('click', function (e) {
        e.target.style.backgroundColor = createRandomColor();
    })
}

