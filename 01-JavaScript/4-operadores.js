

const arreglo =['a' ,'b','c'];

const respuesta =arreglo.forEach((valorActualDeLaIteracion,indice,arreglo)=>{
    console.log('valor: ', valorActualDeLaIteracion);
    console.log('Indice: ',indice);
    console.log('arreglo: ', arreglo);
})
console.log(respuesta);

const arr = ['A','b','C']

const respuestaMap= arr.map( valorActual =>valorActual.toUpperCase());
console.log(respuestaMap);

const arr_3=[9,5,3,2,7,80];
const respuestaFilter = arr_3.filter(valorActual=>valorActual>5).map(valorActual=>valorActual+1).filter(valorActual=>valorActual>7);
console.log(respuestaFilter);

