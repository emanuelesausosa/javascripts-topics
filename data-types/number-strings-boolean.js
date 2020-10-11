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
