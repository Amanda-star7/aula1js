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

let num = prompt("Digite um número: ");
if (num%2 == 0){
    console.log("O número é par.");
} else{
    console.log("O número é ímpar.");
}
//3.2

let ida = prompt("Digite sua idade:")

if (ida>= 18){
    console.log("Você pode dirigir:)")
} else{
    console.log("Você não pode dirigir:(")
}

//3.3

let nota = prompt("Digite sua nota (0 a 10):");
if ( nota < 5) {
    console.log("Você está de REPROVADO:(");
} else if (nota >= 5 && nota < 7) {
    console.log("Você está de RECUPERAÇÃO!!");
} 
else if (nota >= 7 && nota <= 10) {
    console.log("Você está APROVADO:)");
}

//ATIVIDADE 4 - Laços de Repetição

//4.1

for (let x = 1; x<=10; x++){
    console.log(x)
}

//4.2

let val = prompt("Digite um número para a tabuada:");

for (let i = 1; i<=10; i++){
    console.log(`${val} x ${i} = ${val*i}`);
}

//4.3

let senha = prompt("Digite sua senha:");
while (senha !== "1234") {
    alert ("Senha Incorreta:(");
    senha = prompt("Digite sua senha:");
}
alert("Acesso Permitido:)");

//ATIVIDADE 5 - Funções

//5.1

let num1 = Number(prompt("Digite o Primeiro número:"));
let num2 = Number(prompt("Digite o Segundo número:"));

let resul (num1,num2){

} 
function soma(num1, num2) {
    return num1 + num2;
}

