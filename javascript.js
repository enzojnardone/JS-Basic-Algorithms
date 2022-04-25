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


// Iteración #4: Arrays

// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let avenger = avengers[0]
console.log(avenger)

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers.push("IRONMAN")
avengers.splice (0, 0, "IRONMAN")
avenger = avengers[0]
console.log(avenger)

// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

let rickAndMortyCharacters = ["Rick", "Beth", "Jerry"]; //Se cambia con "const" por "let" para poder manipular la variable"
rickAndMortyCharacters.push("Morty", "Summer")
console.log(rickAndMortyCharacters[4])

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

// Iteración #5: Condicionales
// En base al código siguiente, muestra los mensajes correctos por consola.

const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2 / number1 === 2) {
    console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
    console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
    console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
  }

  if (number2 / 2 == number1 || number1 / 5 == number3) {
      console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  }