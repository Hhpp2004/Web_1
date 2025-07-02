
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
            <span class="classeBotaoRemover" onclick="apagar(this)">remover</span>
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

function filtropesquisa(){
    const aux = document.getElementById("pesquisar").value.trim().toUpperCase();
    const lista = document.querySelectorAll("#idTarefas li");
    const res = document.getElementById("res");

    res.innerHTML = "";

    if(aux === "")
    {
        res.innerHTML = "";
        res.style.display = "none";
    }

    const filtro =  Array.from(lista).filter(tarefa =>{
        const nome = tarefa.querySelector("label").textContent.toUpperCase();
        return nome.includes(aux);
    });

    if(filtro.length > 0)
    {
        const resultado = document.createElement("ul");
        resultado.style.listStyle = "none";
        resultado.style.padding = "0";

        filtro.forEach(aux2 => {
            const nome = aux2.querySelector("label").textContent;
            const li = document.createElement("li");
            li.textContent = nome;
            resultado.appendChild(li);
        });
        res.appendChild(resultado);
        res.style.display = "block";
    }
    else
    {
        res.innerHTML = "<p>Nenhuma tarefa encontrado</p>"
    }
}

function visivel()
{
    const check = document.getElementById("visivel");
    const lista = document.getElementById("idListaTarefas");
    lista.style.display = check.checked? 'none' : 'block';
}