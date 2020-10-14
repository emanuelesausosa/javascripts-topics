// los objetos son tipos de datos dinamicos
// polimorficos -> wrapper (envoltorio) de otros objetos
// datos primitivos
// arrays
// otros objetos

// let myObjeto = {};

let myObjeto = {
  myBirthDate: "12/12/2012",
  name: "Emanuel",
  hobbies: ["caminiar", "programar", "leer", "youtube"],
  vehiculo: {
    marcar: "BMW",
    motor: 3.0,
  },
};

console.log(myObjeto);

console.log(myObjeto.name);

// definir nueva clave en tiempo de ejecución
myObjeto["estatura"] = 1.74;
console.log(myObjeto);
