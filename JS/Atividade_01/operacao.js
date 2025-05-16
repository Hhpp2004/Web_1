var teste;
function pega_valores() {
    var n1 = parseInt(document.getElementById("num").value)
    var n2 = parseInt(document.getElementById("num_2").value)
    return { n1, n2 }
}

function soma() {
    var {n1,n2} = pega_valores()
    alert("Soma: "+(n1+n2))
}

function subtracao()
{
    var {n1,n2} = pega_valores()
    alert("Subtração: "+(n1-n2))
}

function multiplicacao()
{
    var {n1,n2} = pega_valores();
    alert("Multiplicação: "+(n1*n2))
}

function divisao()
{
    var {n1,n2} = pega_valores();
    alert("Divisão: "+(n1/n2))
}

function soma_intervalo()
{
    var {n1,n2} = pega_valores()
    var soma = 0
    for(var i = n1;i <= n2;i++)
    {
        soma += i;
    }
    alert("Soma dos intervalos: "+(soma))
}

function fatorial()
{
    var {n1} = pega_valores();
    var res = 1
    for(var i = 2;i <= n1;i++)
    {
        res *= i;
    }
    alert("Fatorial de "+n1+": "+res)
}

function mostrartodos(){
    var {n1,n2} = pega_valores()
    var list = []
    for(var i = n1;i <= n2;i++)
    {   
        list.push(i);
    }
    console.log(list)
    document.getElementById("lista_num").innerHTML = list.join("<br>")
}

function mostrapares()
{
    var {n1,n2} = pega_valores()
    var list = []
    for(var i = n1;i <= n2;i++)
    {   
        if(i % 2 == 0)
        {
            list.push(i);
        }
    }
    console.log(list)
    document.getElementById("lista_num").innerHTML = list.join("<br>")
}

function multicinco()
{
    var {n1,n2} = pega_valores()
    var list = []
    for(var i = n1;i <= n2;i++)
    {   
        if(i % 5 == 0)
        {
            list.push(i);
        }
    }
    console.log(list)
    document.getElementById("lista_num").innerHTML = list.join("<br>")
}



function verfica()
{
    let texto = document.getElementById("text").value;
    if (texto.length < 10) {
        alert("Texto: " + texto);
    } else {
        alert("Erro: texto com mais de 10 caracteres!");
    }
}