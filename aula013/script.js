var p = document.getElementsByTagName("p");
function dolarParaReal(valorReal, dolar){
return valorReal * dolar
}
p[0].innerHTML = "O valor em dolar é = U$" + dolarParaReal(20, 5.14);
p[0].style.color = "green";


const carro = {id: 12, nome: "Ka", marca: "Ford", km: 200};
