const prompt = require('prompt-sync')();

let propina ;
let calcularPorcentaje;
let total;
let cuenta;

function porcentaje (propina, calcularPorcentaje){
    cuenta = Number(prompt("Ingrese el vlaor de su cuenta "))
    console.log(`el valor se su cuenta es de ${cuenta}`);
    console.log("---------------------------------------------------");
    propina = Number(prompt("Ingrese el porcentaje que quiere dejar de propina "))
    console.log(`Su propina va ser de ${propina}%`);
    console.log("----------------------------------------------------");
    let dineroPropina = (cuenta * propina)/100
    console.log(`Su propina va ser de $ ${dineroPropina}`);
    
    
}

porcentaje()