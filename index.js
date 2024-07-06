const signup = document.getElementById('signup');
const success = document.getElementById('success');
success.style.display = "none"; //hiding the success msg when signup is active
const input_box = document.querySelector('#input_box');
const form = document.getElementById('form');
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//This will check for email validation for every input
form.addEventListener('input', function (event) {
    if (validateEmail()) {
        console.log('Email is valid');
        isSuccess();
    } else {
        console.log('Email is invalid');
        isFailed();
    }
});

//and due to submit event, it will call successState() function only when, enter is pressed or submit is clicked.
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    if (validateEmail()) {
        console.log('Email is valid');
        isSuccess();
        successState(); // Call successState() function here
    } else {
        console.log('Email is invalid');
        isFailed();
    }
});



// Email validation function
function validateEmail() {
    const email = input_box.value;
    return pattern.test(email);
}


function isFailed() {
    const textOnError = document.getElementById('textOnError');
    textOnError.innerText = "Valid email required";
    input_box.id = "input_box_error";
}

function isSuccess() {
    const textOnError = document.getElementById('textOnError');
    textOnError.innerText = "";
    input_box.id = "input_box";
}


function successState() {
    success.style.display = "block";
    signup.style.display = "none";

    const newEmail = document.getElementById('email_after_success');
    newEmail.innerText = input_box.value;
    newEmail.style.color = "hsl(234, 29%, 20%)";
}

const dismiss = document.getElementById('dismiss_btn');

dismiss.addEventListener('click',()=>{
    signup.style.display = "flex";
    success.style.display = 'none';
    input_box.value = "";
});

