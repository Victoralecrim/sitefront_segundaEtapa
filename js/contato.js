const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const sobrenome = document.getElementById("sobrenome");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nomeValue = nome.value;
    const SnomeValue = sobrenome.value;
    const emailValue = email.value;


    if (nomeValue === "") {
        setErrorFor(nomeValue, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(nomeValue);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
    } else {
        setSuccessFor(email);
    }

    if (SnomeValue === "") {
        setErrorFor(SnomeValue, "Campo de sobrenome vazio !");
    } else {
        return setSuccessFor(SnomeValue);
    }

    const formControls = form.querySelectorAll(".form-controlAll");

    const formIsValid = [...formControls].every((formControlAll) => {
        return formControlAll.className === "form-control success";
    });

    if (formIsValid) {
        console.log("O formulário está 100% válido!");
    }
}

function setErrorFor(input, message) {
    const formControlAll = input.parentElement;
    const small = document.getElementsByTagName("small");

    // Adiciona a mensagem de erro
    small.innerText = message;

    // Adiciona a classe de erro
    formControlAll.className.add = "form-controlAll error";
}

function setSuccessFor(input) {
    const formControlAll = input.parentElement;

    // Adicionar a classe de sucesso
    formControlAll.className.add = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}