// Exercicio 1
function verificar() {
    const texto = document.getElementById("nome").value
    if (texto == "") {
        alert("Campo requerido")
    }
}
function tamanho() {
    const cpf = document.getElementById("cpf").value.split('');
   if(isNaN(cpf))
   {
     if (cpf.length < 11) {
        alert("CPF está faltando numero")
    }
    else if (cpf.length > 11) {
        alert("Não é um CPF")
    }
   }
   else
   {
    alert("Não é CPF")
   }
}

// Exercicio 2
function frase(input) {
    const frase = document.getElementById("frase").value.length;
    document.getElementById("span").innerHTML = frase
}

// Exercicio 3
function separar() {
    const entrada = document.getElementById("entrada").value.trim();
    const palavras = entrada.split(/\s+/); // separa por espaços

    const resultado = document.getElementById("i");
    resultado.innerHTML = ""; // limpa os inputs anteriores

    if (palavras.length < 2) {
        alert("Informe pelo menos duas palavras.");
        return;
    }

    if (palavras.length >= 2) {
        palavras.forEach(palavra => {
            const input = document.createElement("input");
            input.type = "text";
            input.value = palavra;
            input.disabled = true;
            resultado.appendChild(input);
        });
    }
}

// Exercicio 4
function verificacao() {
    const nome = document.getElementById("nome_4").value;
    const ano = document.getElementById("data").value;
    const qtd_filhos = document.getElementById("qtd").value;
    if (nome == "" || nome.length >= 40) {
        alert("Refaça o forms");
    }
    else if (new Date(ano).getFullYear() <= 1910 || new Date(ano).getFullYear() >= 2025) {
        if(ano.getFullYear() < 1910 || ano.getFullYear() > 2025)
        {
            alert("Ano não compativel")
        }
    }
    else if (qtd_filhos < 1 && qtd_filhos > 99) {
        alert("Quantidade filhos não reconhecido")
    }
}