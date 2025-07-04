// Vetor com as perguntas, opções de resposta e a alternativa correta
const questoes = [
  {
    questao: "1. Qual é a capital do Brasil?",
    respostas: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador", "Belo Horizonte"],
    correta: "Brasília"
  },
  {
    questao: "2. Qual a maior floresta tropical do mundo?",
    respostas: ["Floresta Amazônica", "Floresta do Congo", "Floresta da Dinamarca", "Floresta de Dorne", "Floresta de Valíria"],
    correta: "Floresta Amazônica"
  },
  {
    questao: "3. Quem pintou a Mona Lisa?",
    respostas: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet", "Michelangelo"],
    correta: "Leonardo da Vinci"
  }
];

// Seleciona o formulário no HTML onde as perguntas serão inseridas dinamicamente
const form = document.getElementById("form-prova");

// Percorre cada questão do vetor e cria o HTML correspondente para exibição
questoes.forEach((q, index) => {
  // Cria um <div> para agrupar cada questão
  const div = document.createElement("div");
  div.className = "questao"; // aplica a classe CSS "questao"

  // Cria o enunciado da questão (elemento <p>)
  const enunciado = document.createElement("p");
  enunciado.textContent = q.questao; // insere o texto da pergunta
  div.appendChild(enunciado); // adiciona o enunciado ao <div> da questão

  // Cria um container para as opções de resposta (grupo de radio buttons)
  const grupo = document.createElement("div");
  grupo.className = "respostas"; // aplica a classe CSS "respostas"

  // Percorre cada alternativa de resposta para essa pergunta
  q.respostas.forEach(resp => {
    const id = `q${index}_${resp}`; // cria um ID único para cada radio button

    // Cria um rótulo (<label>) para associar com o input
    const label = document.createElement("label");
    label.setAttribute("for", id);

    // Cria o botão do tipo radio
    const radio = document.createElement("input");
    radio.type = "radio"; // tipo radio
    radio.name = `q${index}`; // o mesmo nome para o grupo da questão (impede múltiplas seleções)
    radio.id = id; // ID único
    radio.value = resp; // valor será o texto da alternativa

    // Junta o botão + texto da resposta no <label>
    label.appendChild(radio);
    label.appendChild(document.createTextNode(resp));

    // Adiciona o label ao grupo de respostas
    grupo.appendChild(label);
    grupo.appendChild(document.createElement("br")); // quebra de linha
  });

  // Junta o grupo de respostas à questão
  div.appendChild(grupo);

  // Adiciona tudo ao formulário principal
  form.appendChild(div);
});

// Função executada quando o usuário clica em "Enviar"
function corrigir() {
  let acertos = 0; // contador de acertos

  // Percorre todas as questões para verificar quais foram marcadas corretamente
  questoes.forEach((q, index) => {
    // Busca o botão marcado (radio selecionado) para a questão atual
    const respostaMarcada = document.querySelector(`input[name="q${index}"]:checked`);

    // Verifica se o usuário selecionou algo e se a resposta está correta
    if (respostaMarcada && respostaMarcada.value === q.correta) {
      acertos++; // incrementa se a resposta estiver certa
    }
  });

  // Exibe o resultado no elemento com id="resultado"
  document.getElementById("resultado").textContent = 
    `Você acertou ${acertos} de ${questoes.length} perguntas.`;
}
