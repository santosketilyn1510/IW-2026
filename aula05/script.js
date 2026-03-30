// a) Maior número
function maiorNumero(a, b) {
  return a > b ? a : b;
}

let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
console.log("Maior número:", maiorNumero(n1, n2));


// b) Verificar se é par
function ehPar(numero) {
  return numero % 2 === 0;
}

let num = Number(prompt("Digite um número:"));
console.log("É par?", ehPar(num));


// c) Fatorial
function fatorial(n) {
  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}

let numFat = Number(prompt("Digite um número para fatorial:"));
console.log("Fatorial:", fatorial(numFat));


// d) Média de lista
function media(lista) {
  let soma = 0;

  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }

  return soma / lista.length;
}

// pedindo 3 números
let m1 = Number(prompt("Digite a primeira nota:"));
let m2 = Number(prompt("Digite a segunda nota:"));
let m3 = Number(prompt("Digite a terceira nota:"));

console.log("Média:", media([m1, m2, m3]));


// e) Celsius para Fahrenheit
function celsiusParaFahrenheit(c) {
  return (c * 9/5) + 32;
}

let temp = Number(prompt("Digite a temperatura em Celsius:"));
console.log("Fahrenheit:", celsiusParaFahrenheit(temp));