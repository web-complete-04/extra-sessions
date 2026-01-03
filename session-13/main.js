const passwordInput = document.querySelector('#password');

// accessing the field value
console.log(passwordInput.value);

// empty the field value 
passwordInput.value = '';

// writing the field value
passwordInput.value = 'something';


function generateRandomPass(passLength = 8){
    const passCharPool = 'abcdefghijklmnopqrstuvxyz1234567890!@#$%^*';
    
    let password = '';
    for (let i = 0; i < passLength; i++) {
        const randomIndex = Math.floor(Math.random() * passCharPool.length)
        password += passCharPool.charAt(randomIndex); 
        
    }

    return password;
}

document.querySelector('#generate-pass').addEventListener('click', function () {
    passwordInput.value = generateRandomPass(12);
});


const showHidePassBtn = document.querySelector('#show-pass');
showHidePassBtn.addEventListener('click', function(){
    if(passwordInput.type == 'password'){
        passwordInput.type = 'text';
        showHidePassBtn.textContent = 'hide pass';
    }
    else{
        passwordInput.type = 'password';
        showHidePassBtn.textContent = 'show pass';
    }
});