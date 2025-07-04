const certo = {
    pergunta1: "br",
    pergunta2: "fa",
    pergunta3: "lv"
};

function verificacao() {

    const respostas = {};
    let cont = 0;

    const gruposPerguntas = Object.keys(certo);

    gruposPerguntas.forEach(nome_pergunta => {
        const seletor = `input[name="${nome_pergunta}"]:checked`;

        const respostaSelecionada = document.querySelector(seletor);

        respostas[nome_pergunta] = respostaSelecionada?.value || null;

        if (respostas[nome_pergunta] === certo[nome_pergunta]) {
            cont++;
        }
    });

    document.getElementById('resultado').innerHTML =
        `
        <h3>Resultado:</h3>
        <p>Acertos: ${cont} de ${gruposPerguntas.length}</p>
    `;
}