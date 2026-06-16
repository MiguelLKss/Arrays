let filmes = [];

for (let i = 0; i < 5; i++) {
    filmes[i] = prompt("Digite um filme:");
}

let posicao = Number(prompt("Qual posição deseja alterar?"));
let novoFilme = prompt("Digite o novo filme:");

filmes[posicao] = novoFilme;

console.log(filmes);