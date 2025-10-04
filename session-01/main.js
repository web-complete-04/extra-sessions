console.log('main.js loaded...');

// debugger;

// allows the user to input a value in a textbox
let distInKm = prompt('Input the number of kilometers:');
distInKm = Number(distInKm);

// processing instructions
let distInMiles = distInKm * 0.62;

// displays a message to the user
// alert(`${distInKm} km is: ${distInMiles} in miles.`);
alert(distInKm + ' km is: ' + distInMiles + ' in miles.');