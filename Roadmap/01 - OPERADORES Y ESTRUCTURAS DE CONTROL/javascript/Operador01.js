/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos. */

// Operadores aritméticos

let suma = 1 + 22;
let resta = 2 - 5;
let division = 6 / 1;
let multiplicacion = 4*2;

// Operadores lógicos
let verdadero = true && true;
let falso = false || false;

// Operadores de comparación
let iqual = 1 == 1; //Igualdad
let distinto = 1 != 2; //Diferencia
let mayor = 5 > 2; //Mayor que 
let menor = 5 < 2; //Menor que
let mayorIgual = 4>= 2; //Mayor o igual que
let menorIgual = 4 <= 2; //Menor o igual que

// Operadores de asignación

let a = 1;
a += 4; // Adición
a -= 3; // Sustracción
a *= 6; // Multiplicación
a /= 2; // División



// Operadores Incremento y decremento


let b  = 2;

b++; //Incremento
console.log(b);
b--; //Decremento



// Operadores de comparación


let num1 = 6;
let num2 = 2;
let comparacion1 = num1 > num2;
let comparacion2 = num1 < num2;
let comparacion3 = num1 >= num2;
let comparacion4 = num1 <= num2;
let comparacion5 = num1 === num2;
let comparacion6 = num1 !== num2;


// Operadores de negación
let neg = !true;
console.log(neg);
let neg2 = !false;
console.log(neg2);

// Operadores de igualdad o identidad
let igualdad =2 === 2;
console.log(igualdad);
let des = 2 !== 2;

// Operador de concatenación
let text1 = "Hey";
let text2 = "Hola";
let text3 = text1 + text2;

/* Estructuras de control */

// if...else

let language = "Javascript";
if (language !== "Javascript") {
  console.log("Te equivocas de carpeta, amigo");
} else {
  console.log("Estás en la carpeta correcta");
}


// For 

for (let valor = 0; valor > 3; valor++) {
    console.log(valor);
}


// While 

let cont = 5;
while (cont > 2) {
    console.log(cont);
    cont--;
}
/*
* DICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

let num =10;
while (num <= 55) {
    if (num % 2 === 0 && num !== 16 && num % 3 !== 0) {
        console.log(num);
    }
    num++;
}
