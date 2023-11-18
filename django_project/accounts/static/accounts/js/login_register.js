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
