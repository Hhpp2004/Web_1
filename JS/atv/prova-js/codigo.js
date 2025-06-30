function removeTarefa(elemento) {
    // Aproveitando que dá para buscar o parent direto pelo elemento parametrizado na função
    const elementoARemover = elemento.parentNode
    elementoARemover.parentNode.removeChild(elementoARemover)
}

function inserirTarefa() {
    const inputNome = document.getElementById("idInsereNome")
    const nome = inputNome.value

    if (!nome || nome.trim().length === 0) {
        alert("Nome da tarefa não pode estar vazia")
        return
    }

    const li = document.createElement("li")

    // Criando uma tarefa noma baseada no HTML do exercício
    li.classList += "classeItemTarefa"
    li.innerHTML = `
    <span class="classeNome">
        <input type="checkbox">
        <label>${nome}</label>
    </span>
    <span class="classeBotaoRemover" onclick="removeTarefa(this)">remover</span>`

    const ul = document.getElementById("idTarefas")
    ul.appendChild(li)

    inputNome.value = ""
}

function removerTarefasConcluidas() {
    const resposta = prompt("Realmente deseja excluir as tarefas concluídas? (Sim/Não)", "Não")

    if (!resposta || resposta.trim().length === 0 || (resposta !== "Sim" && resposta !== "Não")) {
        alert("Resposta inválida")
        return
    }

    if (resposta === "Não") {
        alert("Ok, não serão excluídas as tarefas concluídas")
        return
    }
    
    const tarefas = document.getElementsByClassName("classeItemTarefa")
    let tarefasConcluidas = []

    // Buscando todas as tarefas com o checkbox marcado como concluídas
    for (let i = 0; i < tarefas.length; i++) {
        const tarefa = tarefas.item(i)

        if (tarefa.children[0].children[0].checked) {
            tarefasConcluidas.push(tarefa)
        }
    }

    // Removendo todas as tarefas que foram descobertas anteriormente
    const ul = document.getElementById("idTarefas")
    tarefasConcluidas.forEach(tarefaConcluida => ul.removeChild(tarefaConcluida))
}


function escolheDica(elemento) {
    // Aproveitando que a ultima letra é a parte identificador que diferencia os 3 items
    const painelEscolhido = document.getElementById(`idDivDica${elemento.id.at(-1)}`)
    
    // Primeiro passo: desselecionar todas as dicas
    const classeGuias = document.getElementsByClassName("classeGuias")[0]

    for (li of classeGuias.children) {
        li.classList = []
    }
    
    const classePainel = document.getElementsByClassName("classePainel")

    for (div of classePainel) {
        div.classList = [ "classePainel" ] 
    }
    
    // Segundo passo: selecionar a dica clicada
    elemento.className += " classeAtivo"
    painelEscolhido.className += " classeAtivo"

}
