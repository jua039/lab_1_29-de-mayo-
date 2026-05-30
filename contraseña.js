const prompt = require('prompt-sync')();


console.log("Crea un contraseña debe contener 8 caracteres o mas, incluir un numero, incluir una mayúscula ");
console.log("-------------------------------------------------------------------------");
let contra = prompt("Ingrese una contraseña ")
console.log("-------------------------------------------------------------------------");





function validarContrasena (contra){
    let caracteres = contra.length >= 8;
    let numero = /\d/.test(contra)
    let mayusculas = /[A -Z]/.test(contra)
    return caracteres && numero && mayusculas
}

console.log(validarContrasena(contra));
