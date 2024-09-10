document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calcular").addEventListener("click", function(event) {
        let dataNascimento = new Date(document.getElementById("data").value);
        let dataAtual = new Date();

        let diferenca_anos = dataAtual.getFullYear() - dataNascimento.getFullYear();
        let diferenca_mes = dataAtual.getMonth() - dataNascimento.getMonth();

        let idade = diferenca_anos;
        
        if(diferenca_mes < 0 || diferenca_mes == 0 && dataAtual.getDate() <= dataNascimento.getDate())
            idade--;

        document.getElementById("idade").innerText = `Você tem ${idade} anos!`;
    });
});
