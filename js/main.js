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

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Add in your login stuff

        setFormMessage(loginForm, "error", "Invalid username/password combination.");
    });

    register.addEventListener("submit", e => {
        e.preventDefault();

        // Add in your registation stuff

        setFormMessage(register, "error", "Something went wrong.");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "rUsername" && e.target.value.length > 0 && e.target.value.length < 5) {
                setInputError(inputElement, "Username must be at least 5 chatacherts long.");
            }
        });
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "setPassword" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Password must be at least 8 chatacherts long.");
            }
        });
    });
})