const prompt = require('prompt-sync')();
const inventario = [
    { nombre: "camisa", precio: 20 },
    { nombre: "zapatos", precio: 50 },
    { nombre: "pantalon", precio: 35 },
    { nombre: "chaqueta", precio: 60 },
    { nombre: "gorra", precio: 15 },
    { nombre: "medias", precio: 8 },
    { nombre: "morral", precio: 45 }
];

busquedaInventario = prompt("ingrese que qeuires buscar ");

function busquedaProducto(nombre, precio){
    let name = nombre.toLowerCase().trim();

    for (let producto of precio){
        if (producto.nombre.toLowerCase() === name){
            return producto.precio;
        }
    }
    return null ;
}

let precioEncontrado = busquedaProducto(busquedaInventario, inventario);

console.log(precioEncontrado);
