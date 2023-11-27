

const papa= require("./math.js");
const chalk= require("chalk");

console.log(chalk.red('Hello world!'));
console.log(papa);


console.log(papa.sumar(1,2));
console.log(papa.restar(1,2));
console.log(papa.mult(1,2));
console.log(papa.div(1,2));
console.log(papa.div(1,0));
console.log(papa.hola("Pepe"));