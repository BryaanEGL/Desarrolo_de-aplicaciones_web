//calculadora
num1 = 10;
num2 = 20; 
let resultado;

const operacion ="+";

switch (operacion) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      break; // Salir del switch si hay división por cero
    }
    resultado = num1 / num2;
    break;
}
  console.log("El resultado es:", resultado);

