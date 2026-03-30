// a) Maior número
function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// teste
console.log("Maior número:", maiorNumero(10, 5));


// b) Verificar se é par
function ehPar(numero) {
  return numero % 2 === 0;
}

// teste
console.log("É par?", ehPar(4));


// c) Fatorial
function fatorial(n) {
  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}

// teste
console.log("Fatorial:", fatorial(5));


// d) Média de uma lista
function media(lista) {
  let soma = 0;

  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }

  return soma / lista.length;
}

// teste
console.log("Média:", media([7, 8, 9]));


// e) Celsius para Fahrenheit
function celsiusParaFahrenheit(c) {
  return (c * 9/5) + 32;
}

// teste
console.log("Fahrenheit:", celsiusParaFahrenheit(25));