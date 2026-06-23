const prompt = require("prompt-sync")();

let fila = [];

for (let i = 0; i < 5; i++) {
    fila[i] = prompt("Digite o nome da pessoa: ");
}

let nome = prompt("Digite o nome da nova pessoa: ");

fila.push(nome);

console.log("Fila:", fila);