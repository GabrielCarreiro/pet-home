function Verifica() {
    pass = document.getElementById("password").value;
    confirm_pass = document.getElementById("confirm_password").value;

    if (pass == confirm_pass) {
        document.getElementById("envia").disabled = false;

    } else {
        document.getElementById("envia").disabled = true;
        document.getElementById("password").style.color = "#f00";

    }
}

function validandoSenha() {
    password = document.getElementById("password").value;
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


    if (!regex.exec(password)) {
        document.getElementById("password").style.color = "#f00";
    } else {
        document.getElementById("password").style.color = "#000";
        document.getElementById("confirm_password").disabled = false;
    }

}
