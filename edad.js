const prompt = require('prompt-sync')();

const empleados = [
    { apodo: "Carlos", tiempo: 24 },
    { apodo: "Sofia", tiempo: 34 },
    { apodo: "Mateo", tiempo: 17 },
    { apodo: "Elena", tiempo: 12 }
];

let restriccion = Number(prompt("Ingresa la  edad mínima: "));

function depurarRegistros(datos, minimo) {
    let filtrados = [];

    for (let i = 0; i < datos.length; i++) {
        if (datos[i].tiempo >= minimo) {
            filtrados.push(datos[i]);
        }
    }
    return filtrados;
}

const registroFinal = depurarRegistros(empleados, restriccion);
console.log(registroFinal);