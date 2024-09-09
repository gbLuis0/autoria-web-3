document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(event) {
        let nome = document.getElementById("nome").value.trim();
        let email = document.getElementById("email").value.trim();
        let senha = document.getElementById("senha").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (!nome || !email || !senha || !confirmPassword) {
            alert('Preencha todos os campos');
            event.preventDefault();
            return;
        }

        if (senha !== confirmPassword) {
            alert('As senhas devem ser iguais');
            event.preventDefault();
            return;
        }
    });
});
