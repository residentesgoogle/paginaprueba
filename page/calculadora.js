// javascript para Calculadora
var dato1 = prompt("Introduce el primer número:");
var dato2 = prompt("Introduce el segundo número:");
var operacion = prompt("Introduce la operación a realizar:");

var numero1 = parseInt(dato1);
var numero2 = parseInt(dato2);

var resultado = null;
var texto = null;

if (operacion == "+"){
  // realizariamos la operacion de sumar el numero1 y el numero2
  resultado = numero1 + numero2;
  texto = "La suma de " + numero1 + " y " + numero2 + " es igual a " + resultado;
} else if (operacion == "-") {
  resultado = numero1 - numero2;
  texto = "La resta de " + numero1 + " entre " + numero2 + " es igual a " + resultado;
} else if (operacion == '*') {
  resultado = numero1 * numero2;
  texto = "La multiplicación entre " + numero1 + " y " + numero2 + " es igual a " + resultado;
} else if (operacion == "/") {
  resultado = numero1 / numero2;
  texto = "La división entre " + numero1 + " y " + numero2 + " es igual a " + resultado;
} else {
  texto = "Operación no permitida"
}

alert(texto)
console.log(texto);
