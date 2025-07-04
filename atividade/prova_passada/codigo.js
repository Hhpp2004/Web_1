// Executa o código apenas após toda a página ser carregada
window.onload = function () {

    // Seleciona os elementos que serão usados no script
    const campoFilme = document.getElementById("campoFilme"); // campo de texto para inserir novo filme
    const botaoInserir = document.getElementById("botaoInserir"); // botão "Inserir"
    const listaFilmes = document.getElementById("filmes"); // lista <ul> onde os filmes são adicionados
    const campoBusca = document.getElementById("campoBusca"); // campo de texto para buscar filmes
    const esconderFilmes = document.getElementById("esconderFilmes"); // checkbox para ocultar filmes

    // ================================
    // INSERÇÃO DE NOVO FILME NA LISTA
    // ================================
    botaoInserir.onclick = function () {
        const nome = campoFilme.value.trim(); // obtém e limpa espaços do texto digitado

        // Valida se o campo está vazio
        if (nome === "") {
            alert("Digite o nome do filme."); // exibe alerta se estiver vazio
            return; // interrompe a função
        }

        // Cria o elemento <li> para o novo filme
        const li = document.createElement("li");
        li.className = "itemFilme"; // adiciona classe de estilo

        // Cria o <span> que mostra o nome do filme
        const spanNome = document.createElement("span");
        spanNome.className = "nomeFilme";
        spanNome.textContent = nome; // insere o nome digitado

        // Cria o botão "remover" dentro de um <span>
        const spanRemover = document.createElement("span");
        spanRemover.className = "botaoRemover";
        spanRemover.textContent = "remover";

        // Define o que acontece ao clicar no botão "remover"
        spanRemover.onclick = function () {
            li.remove(); // remove o <li> (filme) correspondente
        };

        // Monta a estrutura do <li>: nome + botão remover
        li.appendChild(spanNome);
        li.appendChild(spanRemover);

        // Adiciona o <li> na lista de filmes (<ul>)
        listaFilmes.appendChild(li);

        // Limpa o campo de texto após adicionar
        campoFilme.value = "";
    };

    // ================================
    // FILTRAR FILMES PELO NOME
    // ================================
    campoBusca.oninput = function () {
        const termo = campoBusca.value.toLowerCase(); // texto digitado, convertido para minúsculas
        const filmes = listaFilmes.querySelectorAll(".itemFilme"); // seleciona todos os <li> da lista

        // Verifica cada filme da lista
        filmes.forEach(function (filme) {
            // Obtém o texto do nome do filme (convertido em minúsculas)
            const nome = filme.querySelector(".nomeFilme").textContent.toLowerCase();

            // Exibe o filme se o nome contém o termo buscado; senão, oculta
            filme.style.display = nome.includes(termo) ? "" : "none";
        });
    };

    // ==================================
    // ESCONDER OU MOSTRAR TODA A LISTA
    // ==================================
    esconderFilmes.onchange = function () {
        // Se o checkbox estiver marcado, oculta a lista inteira
        listaFilmes.style.display = this.checked ? "none" : "block";
    };

    // ==================================
    // SISTEMA DE GUIAS (SOBRE / CONTATO)
    // ==================================
    const guias = document.querySelectorAll("#guias li"); // pega os botões de guia
    const paineis = document.querySelectorAll(".painel"); // pega os conteúdos das guias

    // Para cada botão de guia (Sobre ou Contato)
    guias.forEach(function (guia, index) {
        guia.onclick = function () {
            // Remove a classe "ativo" de todos os botões e painéis
            guias.forEach(g => g.classList.remove("ativo"));
            paineis.forEach(p => p.classList.remove("ativo"));

            // Adiciona a classe "ativo" apenas no botão e painel clicado
            guia.classList.add("ativo");
            paineis[index].classList.add("ativo");
        };
    });
};
