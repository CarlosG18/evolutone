const value_senha = document.getElementById("password");
const value_confirm_senha = document.getElementById("confirm-password");

function validatePassword() {
    if (value_senha.value != value_confirm_senha.value) {
        value_confirm_senha.setCustomValidity("As senhas não coincidem");
    } else {
        value_confirm_senha.setCustomValidity("");
    }
}
value_senha.onchange = validatePassword;
value_confirm_senha.onkeyup = validatePassword;
value_senha.onkeyup = validatePassword;
value_senha.onchange = validatePassword;
value_confirm_senha.onchange = validatePassword;