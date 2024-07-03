let n1 = document.getElementById("num1");
let op = document.getElementById("op");
let n2 = document.getElementById("num2");
let resposta = document.getElementById("answer");

function enviar(event) {
  event.preventDefault();

  let n1Value = parseFloat(n1.value);
  let opValue = op.value;
  let n2Value = parseFloat(n2.value);

  switch (opValue) {
    case "+":
      let soma = n1Value + n2Value;
      resposta.innerHTML = `O valor é: ${soma}`;
      break;
    case "-":
      let sub = n1Value - n2Value;
      resposta.innerHTML = `O valor é: ${sub}`;
      break;
    case "*":
      let mult = n1Value * n2Value;
      resposta.innerHTML = `O valor é: ${mult}`;
      break;
    case "/":
      let div = n1Value / n2Value;
      resposta.innerHTML = `O valor é: ${div}`;
      break;
    default:
      resposta.innerHTML = "Valores errados ou insuficientes, tente novamente...";
      break;
  }
}
