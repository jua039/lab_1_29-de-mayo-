const prompt = require('prompt-sync')();

function promedioo(notas) {
    let sum = 0;

    for (let i = 0; i < notas.length; i++) {

        sum += Number(notas[i]);
    }
    return (sum / notas.length).toFixed(2);
}

let notasUsuario = prompt("ingresa tus notas : ");

let notas = notasUsuario.split(",");

console.log(`El promedio es de ${promedioo(notas)}`);