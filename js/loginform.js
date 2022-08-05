function showPassword() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
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
   
}


function ValidateForm() {
    //Pegando o id do input de email 
    const inputemail = document.getElementById('email');
    //Pegando o id do input Password
    const inputpassword = document.getElementById('field-password');

    //Verificando o campo de email

    if (inputemail.value == "") {
        alert("Campo de email vazio !");
        //Deixa o input com foco ao clicar
        email.focus();
        //retorna a função e ignora as outras linhas
        return;
    }

    //Verificando o campo de senha

    if(inputpassword.value == ""){
        alert("Campo de senha vazio, por favor informe uma senha !");
        password.focus();
        return;
    }


}

document.getElementById('btn-login').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Logado!');
});