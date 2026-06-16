let tarefas = [];

for (let i = 0; i < 5; i++) {
    tarefas[i] = prompt("Digite uma tarefa:");
}

tarefas.shift();

console.log(tarefas);