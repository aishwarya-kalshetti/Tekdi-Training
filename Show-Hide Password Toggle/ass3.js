const passwordInput = document.getElementById("password");
        const togglePassword = document.getElementById("togglePassword");

        togglePassword.addEventListener("change", function() {
            if (togglePassword.checked) {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        });