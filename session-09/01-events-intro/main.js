
const doAction = function () {
    let count = 0;
    
    return function(){
        count++;
        console.log(`Counter is now: ${count}`);
    }
}

let btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click', doAction());


let count = 10000;