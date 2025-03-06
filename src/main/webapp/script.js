document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("password").addEventListener("blur", validatePassword);
document.getElementById("confirmPassword").addEventListener("blur", validateConfirmPassword);
document.getElementById("paragraph").addEventListener("copy",function(){
alert("Copy is not allowed");
});
function validateEmail() {
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {

        emailError.textContent = "Invalid email format!.";
    } else {
        emailError.textContent = "";
    }
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");

    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.";
    } else {
        passwordError.textContent = "";
    }
}

function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match.";
    } else {
        confirmPasswordError.textContent = "";
    }
}

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let emailError = document.getElementById("emailError").textContent;
    let passwordError = document.getElementById("passwordError").textContent;
    let confirmPasswordError = document.getElementById("confirmPasswordError").textContent;
    if (!emailError && !passwordError && !confirmPasswordError) {
             window.location.href = "login.html";

    }
});
