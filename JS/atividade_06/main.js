function limpar() {
    document.getElementById('nome').value = ' ';
    document.getElementById('tele').value = ' ';
}

function criar_elemento()
{
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('tele').value;
    if(telefone == '' || nome == '')
    {
        alert("Não é possivel adicionar um novo contado deixado os dados do atual em banco")
    }
    else
    {
        const container = document.getElementById('inputs-container');     
        const novaDiv = document.createElement('div');
        novaDiv.className = 'input-linhas';
        novaDiv.innerHTML = `
        <label for="nome">Nome:</label>
        <input type="text" name="nome" class="nome">
        <label for="tele">Telefone: </label>
        <input type="tel" id="tele" class="tele">
        <button type="button" class="botao-lixo" onclick="removerLinha(this)">
            <i class="fas fa-trash-alt"></i>
        </button>
    `;
        container.appendChild(novaDiv);
        novaDiv.querySelector('.nome').focus();
    }
}