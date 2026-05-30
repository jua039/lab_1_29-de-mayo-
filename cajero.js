const prompt = require('prompt-sync')();
let credito = Number(prompt("Ingresa tu saldo actual:) "));

function descontarCosto(balance, valor) {

    if (valor <= balance) {
        balance -= valor;

        console.log("Total restante: " + balance);

    } else {
        console.log("Puntos no alcanzables");
    }
}

let costo = Number(prompt("Ingrese monto a retirar: "));
descontarCosto(credito, costo);