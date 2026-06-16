let nomes = [];

for (let i = 0; i < 5; i++) {
    nomes[i] = prompt("Digite um nome:");
}

let novoNome = prompt("Digite mais um nome:");

nomes.push(novoNome);

console.log(nomes);