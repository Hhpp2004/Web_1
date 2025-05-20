const matriz = [1, 2, 3]
const obj = [{ nome: "Henrique", idade: 20 }, { nome: "Isadora", idade: 21 }]

document.getElementById("id1").innerHTML = "Matriz: " + matriz

function valor_matriz() {
    matriz.push(parseInt(document.getElementById("campo_1").value))

    document.getElementById("id1").innerHTML = "Matriz: " + matriz
}

function valor_objeto() {
    let nome_aux = document.getElementById("nome").value;
    let idade_aux = document.getElementById("idade").value;

    obj.push({ nome: nome_aux, idade: idade_aux });
    document.getElementById("id2").innerHTML = "Tamanho do Objeto: " + obj.length;
}