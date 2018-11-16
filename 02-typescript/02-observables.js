const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;
const numeros$ = rxjs.of(1, "David", true, { nombre: 'david' }, [1, 2, 3, 4], new Date(), 1, 1, 1);
console.log(numeros$);
const promesita = (correcto) => {
    return new Promise((resolve, reject) => {
        if (correcto) {
            resolve(':)');
        }
        else {
            reject(':(');
        }
    });
};
const promesita$ = rxjs.from(promesita(true));
const promesitaNoOk$ = rxjs.from(promesita(false));
numeros$
    .pipe(concat(promesitaNoOk$), concat(promesita$), distinct(), map((valorActual) => {
    return {
        data: valorActual
    };
}))
    .subscribe((ok) => {
    console.log('En ok', ok);
}, (error) => {
    console.log('Error', error);
}, () => {
    console.log('Completado');
});
