// This is for the login/register page


function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);   

    
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function setInputSuccess(inputElement, message) {
    inputElement.classList.add("form__input--success");
    inputElement.parentElement.querySelector(".form__input-success-message").textContent = message;
}

function clearInputSuccess(inputElement) {
    inputElement.classList.remove("form__input--success");
    inputElement.parentElement.querySelector(".form__input-success-message").textContent = "";
}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const register = document.querySelector("#registation__form");
    
    
    document.querySelector("#register_account").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        register.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        register.classList.add("form--hidden");
    });

// Add login stuff and form validation
    loginForm.addEventListener("submit", e => {
        var lUsername = document.getElementById("username");
        var lPw = document.getElementById("password");

        if (lUsername.value === '' || lUsername.value == null) {
            e.preventDefault();
            setFormMessage(loginForm, "error", "Invalid username.");
        };

        if (lUsername.value == "Username" && lPw.value == "password") {
            e.preventDefault()
            window.location.href="registerd_emergencies.html";
        }
    });

// registration form begins here 

    register.addEventListener("submit", e => {
        e.preventDefault();

        // Add in your registation stuff
        var rUsername = document.getElementById("rUsername");
        var rEmail = document.getElementById("rEmail");
        var setPw = document.getElementById("setPassword");
        var rPw = document.getElementById("confirmPassword");
        
        console.log(rUsername.value);
        console.log(rEmail.value);
        console.log(setPw.value);
        console.log(rPw.value);

        setFormMessage(register, "error", "Something went wrong.");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "rUsername" && e.target.value.length > 0 && e.target.value.length < 5) {
                setInputError(inputElement, "Username must be at least 5 chatacherts long.");
            }

            else if (e.target.id === "rUsername" && e.target.value.length > 5 ) {
                setInputSuccess(inputElement, "Valid Username.")};
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "setPassword" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Password must be at least 8 chatacherts long.");
            }

            else if (e.target.id === "setPassword" && e.target.value.length > 8 ) {
                setInputSuccess(inputElement, "Valid password.")};
        });
// fix this below - so it matches values and outputs the success message    
       inputElement.addEventListener("blur", e => {
            if (e.target.id === "confirmPassword" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Password does not match");
            }

            else if (e.target.id === "setPassword".value) {
                setInputSuccess(inputElement, "Passwords match.")};
        });
// fix this above       
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });

        inputElement.addEventListener("input", e => {
            clearInputSuccess(inputElement);
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "rEmail" && e.target.value.length > 0 && e.target.value.includes("@") && e.target.value.includes(".") ) {
                setInputSuccess(inputElement, "Valid Email.");
            }

            else if (e.target.id === "rEmail" && e.target.value.length > 0 ) {
                setInputError(inputElement, "Invalid Email.")};
        });
    });
})

function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function showSetPassword() {
    var y = document.getElementById("setPassword");
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }

  function showConPassword() {
    var z = document.getElementById("confirmPassword");
    if (z.type === "password") {
      z.type = "text";
    } else {
      z.type = "password";
    }
  }
