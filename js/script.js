function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    try {
        if (username == '' || password ==''){
            throw "Por favor, insira seu nome de usuário e senha.";
        } else {
            if (username == 'admin' && password == 'admin123') {
            window.location.href = "https://ww2.uft.edu.br//";
            } else {
                alert("Login falhou. Verifique seu nome de usuário e senha.");
            }
        }
    }
    catch(err) {
        alert(err);
        return;
    }

}
