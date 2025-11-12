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

function somanum(num1,num2){
    let resu = num1 + num2;
    return resu;
}

console.log("O resultado é,",somanum(num1,num2));

//5.2

let nom = prompt("Digite seu nome:")
console.log("Olá,",nom,"!!");

//5.3

function calcumed(not1,not2,not3){
let som = Number(not1) + Number(not2) + Number(not3);
let tot = som / 3;
return tot;
}

let not1 = Number(prompt("Digite a 1° nota:"));
let not2 = Number(prompt("Digite 2° nota:"));
let not3 = Number(prompt("Digite 3° nota:"));

let med = calcumed(not1,not2,not3);
console.log("A média dos números é:",med,);

//ATIVIDADE 6 - Arrays
//6.1

let nomes = ["Amanda", "Luane", "Keilana", "Camilly", "Janaina"];
    console.log("Primeiro nome:",nomes[0]);
    console.log("Último nome:",nomes[nomes.length - 1]);

//6.2

nomes.push("Eduarda");
console.log("Lista de nomes atualizada:",nomes);

//6.3

for (let i = 0; i < nomes.length; i++){
    console.log(`Nome ${i + 1}: ${nomes[i]}`);
}

//ATIVIDADE 7 - Objetos
//7.1

let carro = {
    marca: "Ford ",
    modelo: "Territory",
    ano: 2026
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);

console.log(carro);
console.log(`O carro é um ${carro.marca} ${carro.modelo}, ano ${carro.ano}`);

//7.2

let Aluno = {
    nome: "Amanda ",
    idade: "17",
    notas: [10,10,10]
};

let media = (Aluno.notas[0] + Aluno.notas[1] + Aluno.notas[2]) / Aluno.notas.length;
console.log(`Aluno:${Aluno.nome}`);
console.log(`Média:${media}`);

//7.3

let produtos = [
   { nome: "Batom", preco: 15 },
   { nome: "Esmalte", preco: 5 },
   { nome: "Gloss", preco: 10 }
];

for (let i = 0; i < produtos.length; i++){
    console.log(`Produto: ${produtos[i].nome} - Preço:R$${produtos[i].preco}`);
}
      
//Atividade08

  //Exer01

    // Exer01 – Mudar cor
const botao = document.getElementById("bot");
const cores = ["red", "blue", "green", "pink", "orange", "purple", "yellow"];

botao.addEventListener("click", function() {
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.backgroundColor = corAleatoria;
});

// Exer02 – Mostrar texto
const input = document.getElementById("inpuu");
const botaun = document.getElementById("botu");

botaun.addEventListener("click", function() {
  const textoDigitado = input.value;
  console.log("Você digitou:", textoDigitado);
  input.value = "";
});

// Exer03 – Contar cliques
const bota = document.getElementById("botcon");
const contatex = document.getElementById("contador");

let contador = 0;
bota.addEventListener("click", function() {
  contador++;
  contatex.textContent = "Números de Cliques: " + contador;
});

//ATIVIDADE 9 - Manipulação de Strings
//9.1

nome = prompt("Digite seu nome:");
console.log(`Seu nome tem ${nome.length} letras.`);

//9.2

frase = prompt("Digite uma frase:");
console.log(frase.toUpperCase());

//9.3

texto = prompt("Digite um texto:");
console.log(texto.substring(0,5));

//ATIVIDADE 10 - Promises e Fetch API/
//10.1

const minhaPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Concluído!");
  }, 3000); // 3 segundos
});

minhaPromise.then((mensagem) => {
  console.log(mensagem);
});

//10.2

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((resposta) => resposta.json())
  .then((dados) => {
    console.log(dados);
  })
  .catch((erro) => {
    console.error("Erro ao buscar dados:", erro);
  });
  
//10.3

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((resposta) => resposta.json())
  .then((posts) => {
    posts.forEach((post) => {
      console.log(post.title);
    });
  })
  .catch((erro) => {
    console.error("Erro ao buscar posts:", erro);
  });