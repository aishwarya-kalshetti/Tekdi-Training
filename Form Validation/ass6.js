const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); 

     
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

  
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const passwordError = document.getElementById("passwordError");

  
      nameError.innerText = "";
      emailError.innerText = "";
      passwordError.innerText = "";

      let isValid = true;

      if (name === "") {
        nameError.innerText = "Name is required";
        isValid = false;
      }

      if (email === "") {
        emailError.innerText = "Email is required";
        isValid = false;
      }

      if (password === "") {
        passwordError.innerText = "Password is required";
        isValid = false;
      }

     
      if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
      }
    });