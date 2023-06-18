document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("login-btn");

    emailInput.addEventListener("input", validateForm);
    passwordInput.addEventListener("input", validateForm);

    function validateForm() {
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (emailValue !== "" && passwordValue !== "") {
            loginBtn.removeAttribute("disabled");
            loginBtn.style.backgroundColor = "#ea872d";
            loginBtn.style.cursor = "pointer";
        } else {
            loginBtn.setAttribute("disabled", true);
            loginBtn.style.backgroundColor = "#ccc";
            loginBtn.style.cursor = "not-allowed";
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

const signUpLink = document.querySelector(".terms span:last-child");
signUpLink.addEventListener("click", function() {
    window.location.href = "registerpage.html";
});
