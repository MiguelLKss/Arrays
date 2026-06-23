const prompt = require("prompt-sync")();

let fila = [];

for (let i = 0; i < 5; i++) {
    fila[i] = prompt("Digite o nome da pessoa: ");
}

let removida = fila.pop();

console.log("Pessoa removida:", removida);
console.log("Fila:", fila);