const form = document.getElementById('form');

const password1El = document.getElementById('password');

const password2El = document.getElementById('password2');

const messageContainer = document.querySelector('.message-container');

const message = document.getElementById('message');



let isValid = false

const validateForm = () => {
    isValid = form.checkVisibility()        // to
    console.log(isValid);

    // STYLE MAIN MESSAGE FOR an ERROR
    if(!isValid) {
        message.textContent = "Please fill out the field";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        return
    }
    // check to see if password match

    if(password1El.value === password2El.value) {
        passwordMatch = true;
        password1El.style.borderColor = "green";
        password2El.style.borderColor = "green"
    }else{
        passwordMatch = false;
        message.te = "Make sure password match.";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        password1El.style.borderColor = "red";
        password2El.style.borderColor = "red";
        return
    }

    if(isValid && passwordMatch) {
        message.textContent = "Sucessfuly registered";
        message.style.color = "green";
        messageContainer.style.borderColor = "green";
    }
        
    


}

const storeFormData = () => {
    const user = {
        name:   form.name.value,
        phone:  form.phone.value,
        email:  form.email.value,
        website:    form.website.value,
        password:   form.password.value
    };

    console.log(user)
}

const processFormData =(event) => {
    event.preventDefault();             // to prevent the page from reloading, we use preventDefault to the event
    // console.log(event)


    validateForm();

    // submit data if valid
    if(isValid && passwordMatch) {
        storeFormData()
    }
}


//  to add event listener to form (submit button can be clickable)(we also called the arrow function as well)
form.addEventListener('submit', processFormData)