const inputContainer = document.querySelectorAll('.input__container'),
        submitBtn = document.querySelector('.submit__container > button');


function validateInput(input) {
    let nextInput = input.nextElementSibling;
    console.log(input.value.length);
    if (input.value.length > 0) {
        nextInput.style.display = 'none';
        nextInput.nextElementSibling.style.display = 'none';
    } else {
        nextInput.style.display = 'block';
        nextInput.nextElementSibling.style.display = 'block';
    }
}

function validateEmail(email) {
    let nextInput = email.nextElementSibling;
    let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(email.value)) {
        nextInput.style.display = 'none';
        nextInput.nextElementSibling.style.display = 'none';
    } else {
        nextInput.style.display = 'block';
        nextInput.nextElementSibling.style.display = 'block';
    }
}

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    inputContainer.forEach(function(item) {
        let input = item.querySelector('input');
        if(input.getAttribute('type') === 'email'){
            validateEmail(input);
        }
        else{
            validateInput(input);
        }
    })
})