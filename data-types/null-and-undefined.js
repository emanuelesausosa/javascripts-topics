// null -> carece de valor

var producto = null;

// podemos evaluar una variable inicializada como null
// falsy -> valor falso
// undefined -> valore falsos
if (producto) {
  console.log("Hola, no vereas imprimir");
}

if(producto == null) {
    console.log("Hola, ahora sí me vereas imprimir");
}

if(producto === null) {
    console.log("Hola, ahora sí me vereas imprimir");
}

// undefined
var x;

// falsy
if(x) {
    console.log("soy undefined, no veras");
}

// null & undefined
// similitud es que no tienen valor
// similitud 2 son falsy

// diferencia
// 

// similitud (falsy, carecen de valor)
console.log(undefined == null);

// diferencia stricta (uso de fondo, inesperada y la otra sí)
console.log(undefined === null);