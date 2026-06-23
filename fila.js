const prompt = require("prompt-sync")();

let fila = [];

for (let i = 0; i < 5; i++) {
    fila[i] = prompt("Digite o nome da pessoa: ");
}

console.log("\n=== MENU ===");
console.log("1 - Mostrar fila");
console.log("2 - Adicionar pessoa no final");
console.log("3 - Atender primeira pessoa");
console.log("4 - Mostrar quantidade de pessoas");
console.log("5 - Remover última pessoa");
console.log("6 - Adicionar pessoa prioritária no início");
console.log("7 - Verificar se uma pessoa está na fila");
console.log("8 - Mostrar próxima pessoa");
console.log("9 - Mostrar última pessoa");

let opcao = Number(prompt("\nQual opção você deseja? "));

if (opcao === 1) {
    console.log("Fila:", fila);
}

if (opcao === 2) {
    let nome = prompt("Nome da pessoa: ");
    fila.push(nome);
    console.log("Fila:", fila);
}

if (opcao === 3) {
    let atendida = fila.shift();
    console.log("Pessoa atendida:", atendida);
    console.log("Fila:", fila);
}

if (opcao === 4) {
    console.log("Quantidade de pessoas:", fila.length);
}

if (opcao === 5) {
    let removida = fila.pop();
    console.log("Pessoa removida:", removida);
    console.log("Fila:", fila);
}

if (opcao === 6) {
    let nome = prompt("Nome da pessoa prioritária: ");
    fila.unshift(nome);
    console.log("Fila:", fila);
}

if (opcao === 7) {
    let nome = prompt("Digite o nome para procurar: ");

    if (fila.includes(nome)) {
        console.log(nome + " está na fila.");
    } else {
        console.log(nome + " não está na fila.");
    }
}

if (opcao === 8) {
    console.log("Próxima pessoa:", fila[0]);
}

if (opcao === 9) {
    console.log("Última pessoa:", fila[fila.length - 1]);
}