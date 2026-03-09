alert("Bem vindo ao site!!");

let nm = prompt("Qual é o seu nome?");
alert("Olá, " + nm + "!");

let idade = prompt("Qual é sua idade?");
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

let resposta = confirm("Você deseja prosseguir?");
if (resposta) {
    alert("Você escolheu continuar.");
} else {
    alert("Você cancelou a ação.");
}

let numero1 = prompt("Digite um número para a soma");
let numero2 = prompt("Digite um número para a soma");

let soma = parseFloat(numero1) + parseFloat(numero2);
alert("O resultado é: " + soma);


let numero = Number(prompt("Digite um número"));
alert("O dobro do número é: " + (numero * 2));


let nome = prompt("Digite seu nome");
let idadeUsuario = prompt("Digite sua idade");

alert("Olá " + nome + ", você tem " + idadeUsuario + " anos!");