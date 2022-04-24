console.log("JS Basic Algorithms PRUEBA")

// Iteración #1: Variables

let myFavoriteHero = 'Hulk';

let x = 50;
let h = 5;
let y = 10;
let z = h + y;

// Iteración #2: Variables avanzadas

// 1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
// const character = {name: 'Jack Sparrow', age: 10};

let character = {name: 'Jack Sparrow', age: 10};
character = {name: 'Jack Sparrow', age: 25}; // Cambiamos variable age a 25

// 1.2 Declara 3 variables con los nombres y valores siguientes 

let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24;

console.log("Soy", firstName, lastName, "tengo", age, "años y me gustan los lobos")

// 1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de ambos juguetes.

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log("La suma de precios es", toy1.price + toy2.price)

// 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
// y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
// basePrice más el valor de la variable globalBasePrice.

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

// Antes de modificar la propiedad globalBasePrice tenemos:

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log("El coche 1 tiene un final price de", car1.finalPrice);
console.log("El coche 2 tiene un final price de", car2.finalPrice);

// Modificando la propiedad globalBasePrice tenemos:

globalBasePrice = 25000

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log("El coche 1 tiene un final price de", car1.finalPrice);
console.log("El coche 2 tiene un final price de", car2.finalPrice);

// Iteración #3: Operadores

// 1.1 Multiplica 10 por 5 y muestra el resultado mediante alert.

// alert (10 * 5)

// 1.2 Divide 10 por 2 y muestra el resultado en un alert.

// alert (10 / 2)

// 1.3 Muestra mediante un alert el resto de dividir 15 por 9.

// alert (15 / 9)

// 1.4 Usa el correcto operador de asignación que resultará en x = 15, 
// teniendo dos variables y = 10 y z = 5.

let m = 10; // Ya existe la variable "y"
let n = 5; // Ya existe la variable "z"

let o = (m + n); // Ya existe la variable "x"
console.log(o)

// 1.5 Usa el correcto operador de asignación que resultará en x = 50,
// teniendo dos variables y = 10 y z = 5.

let a = 10; // Ya existe la variable "y"
let b = 5; // Ya existe la variable "z"

let c = (a * b); // Ya existe la variable "x"
console.log(c)

