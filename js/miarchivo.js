
alert("A continuación carga los datos de tu menú de pizzas online. Tenes que ingresar el nombre de la pizza y su respectivo precio.");

const listadoPizzas = [];
const listadoPrecios = [];
let cantidad = 4;

do{
    let entradaNombre = prompt("Ingresa el nombre de la pizza");
    listadoPizzas.push(entradaNombre);
    let entradaPrecios = parseInt(prompt("Ingresa el precio"))
    listadoPrecios.push(entradaPrecios);
}while(listadoPizzas.length != cantidad);

console.log(listadoPizzas);
console.log(listadoPrecios);

class Producto {
    constructor(gusto, precio) {
        this.gusto = gusto;
        this.precio = precio;
    }
    sumaIVA () {
        this.precio = this.precio * 1.21;
    }
}

const pizzas = [];
pizzas.push(new Producto(listadoPizzas[0], listadoPrecios[0]));
pizzas.push(new Producto(listadoPizzas[1], listadoPrecios[1]));
pizzas.push(new Producto(listadoPizzas[2], listadoPrecios[2]));
pizzas.push(new Producto(listadoPizzas[3], listadoPrecios[3]));

for(const producto of pizzas)
    producto.sumaIVA();

console.log(pizzas);



