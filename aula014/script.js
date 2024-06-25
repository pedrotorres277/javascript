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
setInterval(function(){
    var cronometro = document.getElementById("tempo").innerHTML;
    var soma = parseInt(cronometro) + 1;
    document.getElementById("tempo").innerHTML = soma;
}, 1000);

function pararContagem()