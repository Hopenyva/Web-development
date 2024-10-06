document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

    // Registration Form Validation
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;

        // Name Validation
        const name = document.getElementById('name').value;
        if (name === "") {
            document.getElementById('nameError').textContent = "Name is required.";
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = "";
        }

        // Email Validation
        const email = document.getElementById('email').value;
        if (!validateEmail(email)) {
            document.getElementById('emailError').textContent = "Invalid email format.";
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = "";
        }

        // Password Validation
        const password = document.getElementById('password').value;
        if (password.length < 8) {
            document.getElementById('passwordError').textContent = "Password must be at least 8 characters.";
            isValid = false;
        } else {
            document.getElementById('passwordError').textContent = "";
        }

        // Confirm Password Validation
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (confirmPassword !== password) {
            document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
            isValid = false;
        } else {
            document.getElementById('confirmPasswordError').textContent = "";
        }

        // Age Validation
        const age = document.getElementById('age').value;
        if (age < 18 || age > 25) {
            document.getElementById('ageError').textContent = "Age must be between 18 and 100.";
            isValid = false;
        } else {
            document.getElementById('ageError').textContent = "";
        }

        // Country Validation
        const country = document.getElementById('country').value;
        if (country === "") {
            document.getElementById('countryError').textContent = "Please select a country.";
            isValid = false;
        } else {
            document.getElementById('countryError').textContent = "";
        }

        // Terms and Conditions Validation
        const terms = document.getElementById('terms').checked;
        if (!terms) {
            document.getElementById('termsError').textContent = "You must accept the terms and conditions.";
            isValid = false;
        } else {
            document.getElementById('termsError').textContent = "";
        }

        if (isValid) {
            alert('Registration Successful');
        }
    });

    // Login Form Validation
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;

        // Login Email Validation
        const loginEmail = document.getElementById('loginEmail').value;
        if (!validateEmail(loginEmail)) {
            document.getElementById('loginEmailError').textContent = "Invalid email format.";
            isValid = false;
        } else {
            document.getElementById('loginEmailError').textContent = "";
        }

        // Login Password Validation
        const loginPassword = document.getElementById('loginPassword').value;
        if (loginPassword === "") {
            document.getElementById('loginPasswordError').textContent = "Password is required.";
            isValid = false;
        } else {
            document.getElementById('loginPasswordError').textContent = "";
        }

        if (isValid) {
            alert('Login Successful');
        }
    });

    // Email Format Validation Function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
