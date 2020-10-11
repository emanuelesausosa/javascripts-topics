// number
var myNumero = 15;
var myNumero2 = 15.02;

let suma = myNumero + myNumero2;
console.log(suma);

// strings
// string como un arreglo de char[]

// char = 'c';
// string = char['h', 'o', 'l', 'a'];

let soyString = "Hola";
console.log(soyString);

soyString += " amigos!";
console.log(soyString);

for (let char in soyString) {
  console.log(char, " ->", soyString[char]);
}

console.log(soyString.charAt(5));

// split
let fecha = "27/11/2010";
let fechaArray = fecha.split("/");
console.log(fechaArray);

// substring
let frase = "hoy es un buen día";
for (let char in frase) {
  console.log(char, " ->", frase[char]);
}

let buen = frase.substring(10, 14);
console.log(buen);

// replace
let mal = "MALISIMO";
console.log(frase.replace("buen", mal));

// includes
let found = frase.includes("dia");
console.log(found);

// uppercase
console.log(frase.toUpperCase());

// lowercase
console.log(frase.toLowerCase());

// booleanos
// true | false
// 1 , 2,5   |  0

// null -> false
// undefined -> false

// "" -> falso
// NaN (Not a Number) -> false

var soyTrue = true;
var soyFalse = false;

console.log("soyTrue ->", soyTrue);
console.log("soyFalse ->", soyFalse);

if (-5) {
  console.log("Si me veras en la consola");
}

console.log("Soy un null -> ", Boolean(null));
console.log("Soy un undefined -> ", Boolean(undefined));

var stringVacio = "";
if (stringVacio) {
  stringVacio = "un string lleno";
}
console.log(stringVacio);


