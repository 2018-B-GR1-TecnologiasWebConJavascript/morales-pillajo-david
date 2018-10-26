

const calculadora =require('./calculadorea-simple')
const versionNode= require('./version-node/version-node')

console.log('versionNode',versionNode);

console.log(calculadora.sumar(1,2));
console.log(calculadora.restar(5,3));
console.log(calculadora.multiplicar(4,2));
console.log(calculadora.dividir(10,5));
