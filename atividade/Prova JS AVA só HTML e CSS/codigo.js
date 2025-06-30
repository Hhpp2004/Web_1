
function addLista() {
    const dado = document.getElementById("idInsereNome").value;

    if (dado != '') {
        const li = document.createElement("li");
        li.classList += "classeItemTarefa";
        li.innerHTML = `
            <span class="classeNome">
                <input type="checkbox">
                <label>${dado}</label>
            </span>
            <span class="classeBotaoRemover" onclick="apagar_tudo()">remover</span>
        `;
        const ul = document.getElementById("idTarefas");
        ul.appendChild(li);
    }
    else if (dado.trim().length === 0) {
        alert("Campo de inserção vazia");
    }
}

function apagar(classe) {
    const dado = classe.parentNode;
    dado.parentNode.removeChild(dado);
}


function apagar_tudo() {
    const res = prompt("Deseja Apagar todas as Respostas ?").toUpperCase();

    if (res === 'NÃO' || res === 'NAO') {
        alert("Os seus dados não seram apagados");
        return;
    }
    else if (!res || res.trim().length === 0) {
        alert("Resposta invalida");
        return;
    }
    else {
        const tarefas = document.getElementsByClassName("classeItemTarefa")
        let tarefa_finalizada = []

        for (let i = 0; i < tarefas.length; i++) {
            const tarefa = tarefas.item(i)

            if (tarefa.children[0].children[0].checked) {
                tarefa_finalizada.push(tarefa)
            }
        }
        const ul = document.getElementById("idTarefas");
        tarefa_finalizada.forEach(tarefa_finalizada =>
            ul.removeChild(tarefa_finalizada)
        )
    }
}

function muda_cor(classe) {
    const painel = document.getElementById(`idDivDica${classe.id.at(-1)}`)


    const guias = document.getElementsByClassName("classeGuias")[0]

    for (li of guias.children) {
        li.classList = []
    }

    const dica = document.getElementsByClassName("classePainel")

    for (div of dica) {
        div.classList = ["classePainel"]
    }


    classe.className += " classeAtivo"
    painel.className += " classeAtivo"
}
