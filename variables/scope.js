/*
        Global => que se encuentra en el root del archivo js, 
        local => se encuentra exclusicamente en la definición de una funcion, 
        block => dentro de una estructura de control
        +--------------------------------------+
        | Variable Tye | Scope    | Is mutable | hoisting 
        |==============|==========|============|
        | var          | Function | true       | undefined
        |--------------|----------|------------|
        | let          | Block    | true       | reference error
        |--------------|----------|------------|
        | const        | Block    | false      | reference error
        +--------------------------------------+
        */

var soyUnVar = "Soy un var string";

function soyLaFuncion() {
  console.log(soyUnVar, "dentro de una funcion");
  // esto es una var local
  // let
  // const
  var soyOtroVar = "soy otro var declarado dentro de una funcion";
  console.log(soyOtroVar);
}

// console.log(soyOtroVar);

if (true) {
  console.log(soyUnVar, "dentro de una structura");
}

soyLaFuncion();

// const
if (true) {
  const soyUnConst = "soy un const";
  let soyUnLet = "soy un let";
}

function otraFuncion() {
  const soyUnConst = "soy un const";
  let soyUnLet = "soy un let";
}

otraFuncion();
// console.log(soyUnLet);
// let
