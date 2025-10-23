//ATIVIDADE 1 - Variáveis e Tipos de Dados
//1.1
let nome ="Amanda";
console.log("Meu nome é " + nome);

//1.2
let idade = 17; 
let altura = 1.70; 
console.log("Tenho", idade,"anos e", altura, "metros de altura.");

//1.3
let estudando = true; 
if (estudando) {
  console.log("Estou estudando.");
} else {
  console.log("Não estou estudando.");
}

//ATIVIDADE 2 - Operadores
//2.1
function soma(num1, num2) {
    return num1+num2
}
console.log(soma(5,3));

//2.2
let a = 10;
a /= 2;
console.log(a)

//2.3

let userAge = prompt("Quantos anos você tem?");
userAge = Number(userAge);
if (userAge >=18) {
    console.log("Você é maior de idade.");
} else{
    console.log("Você é menor de idade.");
}

//ATIVIDADE 3 - Condições
//3.1

let userAge = prompt("Digite um número?");
userAge = Number(userAge);
if (userAge /= 0) {
    console.log("O número é par.")
} else{
    console.log("O número é ímpar.")
}

