// function ativarContagem(){
//     document.getElementById("tempo").innerHTML = "Começou a contar!";
//     tempo = setTimeout(function(){ 
//         document.getElementById("tempo").innerHTML = "Executou o setTimeOut!"; 
//     }, 3000); //funcão vai rodar de 5 em 5 segundos
// }
// function pararContagem(){
//     clearTimeout(tempo);
//     document.getElementById("tempo").innerHTML = "Parou a contagem!"; 
// }
// var tempo = setInterval(function(){
//     var cronometro = document.getElementById("tempo").innerHTML;
//     var soma = parseInt(cronometro) + 1;
//     document.getElementById("tempo").innerHTML = soma;
// }, 1000);

// function pararContagem(){
//     clearInterval(tempo);
// }
let data = new Date();
let hora = data.getHours();
let minutos = data.getMinutes();
let dia = [data.getDate(), data.getMonth(), data.getFullYear()];
let dataAtual = dia[0] + "/" + dia[1] + "/" + dia[2];
console.log(data);
console.log(dia + "Hora atual: " + hora + ":" + minutos);

let valor1 = document.getElementById("inputBox1");
let valor2 = document.getElementById("inputBox2");
let operador = document.getElementById("inputBox3");

function Calc(){
    let v1 = parseFloat(valor1.value);
    let v2 = parseFloat(valor2.value);
    let op = operador.value;
    switch (op) {
        case "+":
            let soma = v1 + v2
            window.alert(soma)
            break;
        case "-":
            let sub = v1 - v2;
            window.alert(sub);
            break;
        case "*":
            let mult = v1 * v2;
            window.alert(mult);
            break;
        case "/":
            let div = v1 / v2;
            window.alert(div);
            break;
        default:
            window.alert("Valor digitado é invalido... Tente novamente!")
            break;
    }
}

var p = document.getElementsByTagName("p");
function Carro(valor1, valor2, valor3) {
return valor1 + (" ") + valor2 + (" ") + valor3
}
var uno = Carro("Fiat", "Uno", 2010);
p[0].innerHTML = uno
