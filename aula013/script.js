var p = document.getElementsByTagName("p");
function dolarParaReal(valorReal, dolar){
return valorReal * dolar
}
p[0].innerHTML = "O valor em dolar é = U$" + dolarParaReal(20, 5.14);

const carro = {id: 12, nome: "Ka", marca: "Ford", km: 200};

var botao1 = document.getElementById("botao1");
function onEnter(){
    botao1.style.backgroundColor = "darkBlue";
    botao1.style.cursor = "pointer";
    p[1].innerHTML = "Texto de apoio";
    p[1].style.display = "block"
}
function onLeave(){
    botao1.style.backgroundColor = "rgb(73, 255, 134)";
    p[0].style.color = "black"
}
function onClick(){
    botao1.style.backgroundColor = "red";
    p[0].style.color = "red";
    p[1].style.display = "none"
}
var botao2 = document.getElementById("botao2");
var imagem = document.getElementById("lampada");
function lampadaOn(){
    imagem.src = "lampada_ligada.png"
}
function lampadaOff(){
    imagem.src = "lampada.webp";
}
var botao3 = document.getElementById("checar");
function verificaCor(){
    var cor = document.getElementById("input1").value;

     switch (cor) {
        case "azul":
            botao3.style.backgroundColor = "blue";
            break;
        case "vermelho":
            botao3.style.backgroundColor = "red";
            break;
        case "amarelo":
            botao3.style.backgroundColor = "yellow";
            break;
        default:
            alert("Não é possível a alteração, reveja se os dados foram inseridos corretamente")
            break;
     }
}
var ano = new Date().getFullYear();

for (let i = ano; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}