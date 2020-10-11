// hoisting

var x = 1;

function main() {
  console.log(x);
  var x = 2;
}

// let
// const
let y = 20;
function main2() {
  console.log(y);
  let y = 30;
}

main();
main2();
