document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form-box.login");
    const signupForm = document.querySelector(".form-box.signup");

    const showLoginForm = () => {
        loginForm.style.display = "block";
    };

    const showSignupForm = () => {
        signupForm.style.display = "block";
    };

    // Add an event listener to the "Create an Account" links in the login form
    const createAccountLinksLogin = document.querySelectorAll(".form-box.login .create-acc a");
    createAccountLinksLogin.forEach((link) => {
        link.addEventListener("click", showSignupForm);
    });

    // Add an event listener to the "Login" links in the signup form
    const loginLinksSignup = document.querySelectorAll(".form-box.signup .create-acc a");
    loginLinksSignup.forEach((link) => {
        link.addEventListener("click", showLoginForm);
    });
});

const full_nameEl = document.querySelector('#id_full_name');
const emailEl = document.querySelector('#id_email');
const passwordEl = document.querySelector('#id_password1');
const confirmPasswordEl = document.querySelector('#id_password2');

const signup_form = document.querySelector('#signup-form');

signup_form.addEventListener('submit', function (e) {
    
    // prevent form to be submitted
    e.preventDefault();

    // validate forms
    let isFullNameValid = checkFullName(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();
    
    let isFormValid = isFullNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // if forms are valid then submit
    if (isFormValid)
    {
        signup_form.submit();
    }
});

// check if an input field is empty
const isRequired = value => value === '' ? false : true;

// check if the string is in between min and max characters length
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) => {

    // get signup form element
    const formField = input.parentElement;

    // add error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show error message
    const error = formField.querySelector('small');
    error.textContent = message;
};


const showSuccess = (input) => {
    
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
};


const checkFullName = () => {
    let valid = false;
    const min = 12, max = 50;

    // get all characters without spaces
    const full_name = full_nameEl.value.trim();

    if (!isRequired(full_name)) {
        showError(full_nameEl, 'Full name cannot be blank');
    }

    else if (!isBetween(full_name.length, min, max)) {
        showError(full_nameEl, `full_name must be between ${min} and ${max} characters`)
    }

    else {
        showSuccess(full_nameEl);
        valid = true;
    }

    return valid;

};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();

    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank');
    }

    else if (!isEmailValid(email)) {
        showError(emailEl, 'email is not valid');
    }

    else {
        showSuccess(emailEl);
        valid = true;
    }

    return valid;
};

const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank')
    }

    else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    }

    else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;

    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    }

    else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'Confirm password does not match');
    }

    else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};




