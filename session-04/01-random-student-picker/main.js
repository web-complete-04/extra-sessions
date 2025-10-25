console.log('Random student picker');

let randomNr = Math.floor(Math.random() * 4);
console.log(randomNr);

let student;

/*
if(randomNr === 0){
    student = 'Marinela';
}
else {
    if(randomNr === 1){
        student = 'Claudiu';
    }
    else{
        if (randomNr === 2) {
            student = 'Ovidiu';
        }
        else{
            student = 'Madalin';
        }
    }
}
*/


switch (randomNr) {
    case 0:
        student = 'Marinela';
        break;

    case 1:
        student = 'Claudiu';
        break;

    case 2:
        student = 'Ovidiu';
        break;

    case 3:
        student = 'Madalin';
        break;

    default:
        break;
}


alert('Randomly picked student is: ' + student);
