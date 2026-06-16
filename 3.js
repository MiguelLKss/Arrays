let filmes = [];

for (let i = 0; i < 5; i++) {
    filmes[i] = prompt("Digite um filme:");
}

console.log("Primeiro filme:", filmes[0]);
console.log("Último filme:", filmes[4]);
console.log("Quantidade:", filmes.length);