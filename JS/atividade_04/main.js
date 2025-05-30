// Exercício 1
document.getElementById("nome").innerHTML = "Meu nome é Henrique"

// Exercício 2
document.getElementsByClassName("minha-div")[0].style = "height: 40px; border: 1xp solid black"
document.querySelector(".minha-div").style.backgroundColor = "red"
document.getElementsByClassName("minha-div")[1].style.height = "40px"
document.getElementsByClassName("minha-div")[1].style.backgroundColor = "blue"
document.querySelectorAll(".minha-div")[2].style.height = "40px"
document.querySelectorAll(".minha-div")[2].style.backgroundColor = "yellow"

// exercicio 3
document.getElementsByTagName("img")[0].src = "IBM.gif"
document.getElementsByTagName("img")[0].alt = "Computador IBM"
document.getElementsByTagName("img")[0].title = "Computador IBM"

// exercicio 4
function MudaCor(idElemento, cor) {
    document.getElementById(idElemento).style.color = cor
}
MudaCor("texto-1", "blue")
MudaCor("link-1", "red")

// exercicio 5
function addRed(elemento) {
    elemento.style.backgroundColor = "red"
}

function addWhite(elemento) {
    elemento.style.backgroundColor = "white"
}

function troca_cor(elemento) {
    let cor = elemento.style.backgroundColor;
    if (cor === "blue") {
        elemento.style.backgroundColor = "gray";
    }
    else {
        elemento.style.backgroundColor = "blue"
    }
}

// exercicio 6
function criaQuadrado() {
    let d = document.createElement("div")
    d.setAttribute("class", "quadrado")
    document.getElementById("quadrado").appendChild(d)
}


//exercicio 7

function conta_letra(textarea) {
    let qtd = textarea.value.length
    let span = textarea.nextElementSibling;
    span = span.nextElementSibling;
    span.innerHTML = qtd + (qtd <= 1 ? " caracter" : " carateres")
}

function mudaBorda(elemento, cor) {
    elemento.style.borderColor = cor;
}


