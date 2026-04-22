/*  1. Promedio de un arreglo 

let numeros = [2, 6, 1, 8];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
let promedio = suma / numeros.length;

console.log(`Promeidio, ${promedio}`);

 */


/* 2. Suma de números pares

let nums = [1, 2, 5, 8, 9, 12, 2, 3];

let sumaPares = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    sumaPares += nums[i];
  }
}

console.log(`suma de pares, ${sumaPares}`);
*/


/*3. Libros con readingStatus = true 
const library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true },
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true,},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false,
},
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: false },
];

for (let libro of library) {
  if (libro.readingStatus) {
    console.log(libro.title+"-"+ libro.author);
  }
}

*/

/*4. Unir arreglos y validar longitud 

const arr1 = [2, 5, 2, 3, 7, 2];
const arr2 = [1, 5, 3, 3];

const nuevo = arr1.concat(arr2);

console.log(nuevo);
console.log(nuevo.length >=10);
*/

/* 6. Loteria 

let num1 = 2;
let num2 = 5;
let num3 = 10;
let num4 = 17;
let num5 = 38;

for (let i = 1; i <= 50; i++) {
  if (i === num1 || i === num2 || i === num3 
    || i === num4 || i === num5
  ) {
    console.log("¡Lotería!");
  } else {
    console.log(i);
  }
}
*/ 

/*7. FizzBuzz 

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/

/*8. Validar nota

let diametro = 1.1;
let grosor = 0.24;

// Tipo de vehículo
if (diametro > 1.4) {
  console.log("Vehículo grande");
} else if (diametro > 0.8) {
  console.log("Vehículo mediano");
} else {
  console.log("Vehículo pequeño");
}

// Validación del grosor
if (
  (diametro > 1.4 && grosor < 0.4) ||
  (diametro > 0.8 && diametro <= 1.4 && grosor < 0.25)
) {
  console.log("El grosor es inferior al recomendado");
}

*/

/*9. Rueda

let diametro = 1.1;
let grosor = 0.24;

if (diametro > 1.4) {
  console.log("Vehículo grande");
} else if (diametro > 0.8) {
  console.log("Vehículo mediano");
} else {
  console.log("Vehículo pequeño");
}

if (
  (diametro > 1.4 && grosor < 0.4) ||
  (diametro > 0.8 && diametro <= 1.4 && grosor < 0.25)
) {
  console.log("El grosor es inferior al recomendado");
}
*/

/*10. Helado
let topping = "oreo";
let precio = 50;

if (topping === "oreo") {
  precio += 10;
} else if (topping === "kitkat") {
  precio += 15;
} else if (topping === "brownie") {
  precio += 20;
} else {
  console.log("No tenemos ese topping 😢");
}

console.log("Total:", precio);
*/

/* 11. Programa educativo

let tipo = "course"; 
let beca = "facebook"; 

let precio = 0;
let duracion = 0;

if (tipo === "course") {
  precio = 4999;
  duracion = 2;
} else if (tipo === "carrera") {
  precio = 3999;
  duracion = 6;
} else if (tipo === "master") {
  precio = 2999;
  duracion = 12;
}

if (beca === "facebook") {
  precio *= 0.8;
} else if (beca === "google") {
  precio *= 0.85;
} else if (beca === "jesua") {
  precio *= 0.5;
}

console.log("Mensual:", precio);
console.log("Total:", precio * duracion);

*/

/*  12. Costo de vehículo
let tipo = "coche"; 
let km = 100;
let litros = 120;

let precioKm = 0;


if (tipo === "coche") {
  precioKm = 0.20;
} else if (tipo === "moto") {
  precioKm = 0.10;
} else if (tipo === "autobus") {
  precioKm = 0.5;
}

let extra = (litros <= 100) ? 5 : 10;

let total = (precioKm * km) + extra;

console.log("Total a pagar:", total);

*/



/* RETO 2 */

/* 1. Capturar números hasta que sea 0

let numeros = [];
let input;

do {
  input = Number(prompt("Ingresa un número (0 para salir):"));

  if (input !== 0 && !isNaN(input)) {
    numeros.push(input);
  }

} while (input !== 0);

console.log(numeros);

*/
/*2. Capturar palabras y concatenar

let palabras = [];
let texto;

do {
  texto = prompt("Ingresa una palabra (vacío para salir):");

  if (texto !== "") {
    palabras.push(texto);
  }

} while (texto !== "");

console.log(palabras.join(" "));

*/

/*3. Invertir un arreglo

let arr = [1, 2, 3, 4];

let invertido = arr.reverse();

console.log(invertido);

*/

/* 4. Contar vocales
let texto = "hola mundo";
let contador = 0;

for (let letra of texto) {
  if ("aeiou".includes(letra)) {
    contador++;
  }
}

console.log(contador);
*/


/*5. Índice del número menor
let nums = [5, 2, 9, 1, 7];

let menor = Math.min(...nums);
let indice = nums.indexOf(menor);

console.log(indice);

*/

/*6. Divisores de un número
let numero = 12;
let divisores = [];

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    divisores.push(i);
  }
}

console.log(divisores);

*/

/*7. Factorial
let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}

console.log(factorial);
*/

/* 8. Contar carácter en texto

let texto = "javascript";
let letra = "a";
let contador = 0;

for (let l of texto) {
  if (l === letra) {
    contador++;
  }
}

console.log(contador);

*/

/* 9. Total ganado en cine

let boletos = [
  { edad: 8, precio: 5 },
  { edad: 15, precio: 10 },
  { edad: 70, precio: 7 },
  { edad: 12, precio: 10 },
  { edad: 5, precio: 5 }
];

let total = 0;

for (let b of boletos) {
  total += b.precio;
}

console.log(total);

*/

/*10. Palabra más larga

let palabras = ["manzana", "banana", "cereza", "uva", "fresa"];

let larga = "";

for (let palabra of palabras) {
  if (palabra.length > larga.length) {
    larga = palabra;
  }
}

console.log(larga);

*/

/* 12. Empleados > 8 horas
let registros = [
  { entrada: 8, salida: 17 },
  { entrada: 9, salida: 17 },
  { entrada: 8, salida: 15 },
  { entrada: 7, salida: 18 },
  { entrada: 10, salida: 20 }
];

let contador = 0;

for (let r of registros) {
  if ((r.salida - r.entrada) > 8) {
    contador++;
  }
}

console.log(contador); 

*/ 

/* 13. Total con descuento
let productos = [
  { nombre: "Televisor", precio: 150 },
  { nombre: "Celular", precio: 80 },
  { nombre: "Laptop", precio: 120 },
  { nombre: "Audífonos", precio: 50 }
];

let total = 0;

for (let p of productos) {
  if (p.precio > 100) {
    total += p.precio * 0.9;
  } else {
    total += p.precio;
  }
}

console.log(total);

*/ 

/* 14. Total por categoría

let boletos = [
 { categoria: "adulto", cantidad: 10, precio: 20 },
 { categoria: "niño", cantidad: 15, precio: 10 },
 { categoria: "senior", cantidad: 5, precio: 15 }
];

for (let b of boletos) {
  let total = b.cantidad * b.precio;
  console.log(b.categoria, total);
}

*/

/* 15. Palabras con más de 4 letras
let texto = "EJEMPLO DE PALABRAS LARGAS COMO CUANDO DICES CON TU FLACA";

let palabras = texto.split(" ");
let contador = 0;

for (let p of palabras) {
  if (p.length > 4) {
    contador++;
  }
}

console.log(contador);

*/