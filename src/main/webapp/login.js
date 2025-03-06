document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const captchaText = document.getElementById("captchaText");
  const captchaInput = document.getElementById("captchaInput");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const captchaError = document.getElementById("captchaError");

  let captchaCode = "";


  function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    captchaCode = "";
    for (let i = 0; i < 6; i++) {
      captchaCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    captchaText.textContent = captchaCode;
  }


  generateCaptcha();

  emailInput.addEventListener("blur", function () {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Invalid email format!";
    } else {
      emailError.textContent = "";
    }
  });

  // Password Validation
  passwordInput.addEventListener("blur", function () {
    if (passwordInput.value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters!";
    } else {
      passwordError.textContent = "";
    }
  });

  // Form Submission Handling
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    if (captchaInput.value !== captchaCode) {
      captchaError.textContent = "CAPTCHA does not match!";
      return;
    } else {
      captchaError.textContent = "";
    }

    if (!emailError.textContent && !passwordError.textContent) {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Redirect after successful login
    } else {
      alert("Please fix errors before submitting.");
    }
  });
});
