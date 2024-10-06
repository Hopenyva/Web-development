document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    const summary = document.getElementById('formSummary');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    const formData = {
        name: '',
        email: '',
        contact: '',
        termsAccepted: false
    };

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Capture Data
        formData.name = document.getElementById('name').value;
        formData.email = emailInput.value;
        formData.contact = document.getElementById('contact').value;
        formData.termsAccepted = document.getElementById('terms').checked;

        // Validate Data
        let validationPassed = validateFormData(formData);

        if (validationPassed) {
            // Process Data & Display Summary
            displayFormData();
            confirmationMessage.innerHTML = "Form successfully submitted!";
        } else {
            confirmationMessage.innerHTML = "";
        }
    });

    // Email Validation with Real-time Feedback
    emailInput.addEventListener('input', function () {
        const email = emailInput.value;
        if (!validateEmail(email)) {
            emailError.textContent = " Invalid email format.";
        } else {
            emailError.textContent = "";
        }
    });

    // Validate Form Data
    function validateFormData(data) {
        if (!data.name || !data.email || !data.contact || !data.termsAccepted) {
            alert('Please fill in all required fields and accept terms and conditions.');
            return false;
        }

        if (!validateEmail(data.email)) {
            alert('Please enter a valid email.');
            return false;
        }

        return true;
    }

    // Simple Email Format Validation
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Display Form Data in Summary
    function displayFormData() {
        summary.innerHTML = `
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Preferred Contact Method:</strong> ${formData.contact}</p>
            <p><strong>Terms Accepted:</strong> ${formData.termsAccepted ? 'Yes' : 'No'}</p>
        `;
    }
});
