let numeros = [];
let positivos = 0;

for (let i = 0; i < 6; i++) {
    numeros[i] = Number(prompt("Digite um número:"));

    if (numeros[i] > 0) {
        positivos++;
    }
}

console.log("Quantidade de positivos:", positivos);
