const prompt = require("prompt-sync")();

let fila = [];

for (let i = 0; i < 5; i++) {
    fila[i] = prompt("Digite o nome da pessoa: ");
}

let nome = prompt("Digite o nome para procurar: ");

if (fila.includes(nome)) {
    console.log(nome + " está na fila.");
} else {
    console.log(nome + " não está na fila.");
}