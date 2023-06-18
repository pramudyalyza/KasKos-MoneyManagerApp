document.addEventListener("DOMContentLoaded", function() {
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const registerBtn = document.getElementById("register-btn");

    fullnameInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    passwordInput.addEventListener("input", validateForm);

    function validateForm() {
        const fullnameValue = fullnameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Validasi email menggunakan Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(emailValue);

        // Validasi password menggunakan Regex
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}$/;
        const isValidPassword = passwordRegex.test(passwordValue);

        if (fullnameValue !== "" && isValidEmail && isValidPassword) {
            registerBtn.removeAttribute("disabled");
            registerBtn.style.backgroundColor = "#ea872d";
            registerBtn.style.cursor = "pointer";
        } else {
            registerBtn.setAttribute("disabled", true);
            registerBtn.style.backgroundColor = "#ccc";
            registerBtn.style.cursor = "not-allowed";
        }

        if (emailValue === "") {
            emailInput.classList.remove("error");
            document.getElementById("email-error").style.display = "none";
        } else if (!isValidEmail) {
            emailInput.classList.add("error");
            document.getElementById("email-error").style.display = "block";
        } else {
            emailInput.classList.remove("error");
            document.getElementById("email-error").style.display = "none";
        }

        if (passwordValue === "") {
            passwordInput.classList.remove("error");
            document.getElementById("password-error").style.display = "none";
        } else if (!isValidPassword) {
            passwordInput.classList.add("error");
            document.getElementById("password-error").style.display = "block";
        } else {
            passwordInput.classList.remove("error");
            document.getElementById("password-error").style.display = "none";
        }
    }

    const passwordToggle = document.querySelector(".password-toggle");
    const passwordField = document.querySelector("#password");

    passwordToggle.addEventListener("click", function() {
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    });

    const arrowImage = document.querySelector(".arrow");

    arrowImage.addEventListener("click", function() {
        window.location.href = "mainpage.html";
    });
});
