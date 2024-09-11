
document.addEventListener("DOMContentLoaded", function() {
    const botaoAdicionar = document.getElementById("adicionar_tarefa");
    const campoTarefa = document.getElementById("nova_tarefa");
    const listaTarefas = document.getElementById("lista_tarefas");

    botaoAdicionar.addEventListener("click", function() {
        const tarefaTexto = campoTarefa.value.trim();
        if (tarefaTexto !== "") {
            const li = document.createElement("li");
            li.className = "list-group-item tarefa";
            li.innerHTML = `
                <span>${tarefaTexto}</span>
                <button class="btn btn-success btn-sm">Concluir</button>
                <button class="btn btn-danger btn-sm">Excluir</button>
            `;
            listaTarefas.appendChild(li);
            campoTarefa.value = ""; // Limpa o campo de entrada
        }
    });

    listaTarefas.addEventListener("click", function(event) {
        if (event.target.classList.contains("btn-danger")) {
            event.target.parentElement.remove();
        }
        else if (event.target.classList.contains("btn-success")) {
            event.target.parentElement.querySelector('span').classList.toggle('text-decoration-line-through');
        }
    });
});
