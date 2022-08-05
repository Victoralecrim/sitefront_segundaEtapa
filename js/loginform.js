function showPasswordAndValidateForm() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    //Pegando o id do input de email e senha
    const inputemail = document.getElementById('email');
    const fieldPassword = document.getElementById('field-password');

    if (eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'password';
    }

    //Verificando o campo de email

    if (inputemail.value == "") {
        alert("Campo de email vazio !");
        //Deixa o input com foco ao clicar
        email.focus();
    }

    //Verificando o campo de senha

    if (fieldPassword.value == "") {
        alert("Campo de senha vazio, por favor informe uma senha !");
        fieldPassword.focus();
    }

    else {
        document.getElementById('btn-login').addEventListener('click', function (e) {
            e.preventDefault();
            alert('Campo de email e senha vazios');
        });
    }

}



