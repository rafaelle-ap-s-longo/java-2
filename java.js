
//1. Contando números pares de 1 a 100:
JavaScript//
let contadorPares = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    contadorPares++;
  }
}

console.log("Existem", contadorPares, "números pares entre 1 e 100.");



//2. Calculando média de notas:
JavaScript;//
let somaNotas = 0;
let quantidadeNotas = 0;

while (true) {
  let nota = parseFloat(prompt("Digite a nota do aluno (negativo para sair):"));
  if (nota < 0) {
    break;
  }
  somaNotas += nota;
  quantidadeNotas++;
}

if (quantidadeNotas > 0) {
  let media = somaNotas / quantidadeNotas;
  console.log("A média das notas é:", media);
} else {
  console.log("Nenhuma nota foi inserida.");
}



//3. Tabuada de multiplicação:
JavaScript//
let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}

//4. Jogo de adivinhação:
//
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativa = 0;

while (true) {
  let palpite = parseInt(prompt("Adivinhe o número entre 1 e 10:"));
  tentativa++;

  if (palpite === numeroSecreto) {
    console.log("Parabéns! Você acertou em", tentativa, "tentativas.");
    break;
  } else if (palpite < numeroSecreto) {
    console.log("O número secreto é maior.");
  } else {
    console.log("O número secreto é menor.");
  }
}

//5. Contagem regressiva:

for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log("Feliz Ano Novo!");


