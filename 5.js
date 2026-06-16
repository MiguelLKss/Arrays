let produtos = [];

for (let i = 0; i < 5; i++) {
    produtos[i] = prompt("Digite um produto:");
}

produtos.pop();

console.log(produtos);