function entrada() {
    return prompt("Digite seu nome: ")
}

function dia() {
    return parseInt(prompt("Digite o dia do seu nascimento: "))
}

function mes() {
    return parseInt(prompt("Digite o mês do seu nascimento: "))
}

function ano() {
    return parseInt(prompt("Digite o ano do seu nascimento: "))
}

function qtd_dias(dataNascimento) {
    const hoje = new Date();
    const diffTime = hoje - dataNascimento;
    const diffDias = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDias;
}

function obterDiaDaSemana(data) {
    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
        "Quinta-feira", "Sexta-feira", "Sábado"];
    return diasSemana[data.getDay()];
}

const msg = () => {
    "Meu nome é " + entrada() + " e nasci em " + dia() + "/" + mes() + "/" + ano() + ".<br>Tenho " + qtd_dias(dia()) +
        " dias de vida.<br>Nasci na " + getDay(dia());
}

window.onload = function () {
    const nome = entrada();
    const d = dia();
    const m = mes();
    const a = ano();

    const dataNascimento = new Date(a, m - 1, d);
    const diasDeVida = qtd_dias(dataNascimento);
    const diaSemana = obterDiaDaSemana(dataNascimento);

    const msg = `<strong>Meu nome é ${nome.toUpperCase()} e nasci em ${d.toString().padStart(2, '0')}/${(m).toString().padStart(2, '0')}/${a}<br>
                Tenho ${diasDeVida.toLocaleString('pt-BR')} dias de vida.<br>
                Nasci na ${diaSemana}.<\strong>`;

    document.getElementById("texto").innerHTML = msg;
};