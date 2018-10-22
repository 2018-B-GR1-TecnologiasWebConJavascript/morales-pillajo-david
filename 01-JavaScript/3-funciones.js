function holaMundo() {
    console.log("Hola mundo");
}

console.log(holaMundo());

function sumarDosNumeros(numeroUno, numeroDos) {
    var numeroUnoEsValido = typeof numeroUno == 'number';
    var numeroDosEsValido = typeof numeroDos == 'number';
    if (numeroUnoEsValido && numeroDosEsValido) {
        return numeroUno + numeroDos;
    } else {
        console.error('Parametros no son numeros');
        return 0;
    }

}

console.log(sumarDosNumeros(1, 2, 3, 4, 5, 6, 7)); // 3

console.log(sumarDosNumeros(true, 0, undefined, null, "asd", 6, 7)); // 3

function sumarNNumeros(...numeros) {
    var resultado = calcularResultadoSumarNNumeros(numeros);
    if (resultado.esValido) {
        return resultado.suma;
    } else {
        return 0;
    }
}

function calcularResultadoSumarNNumeros(numeros) {
    var suma = 0;
    var todosLosNumerosSonValidos = true;
    for (var i = 0; i < numeros.length; i++) {
        var numeroEsvalido = typeof numeros[i] == 'number';
        if (numeroEsvalido) {
            suma = suma + numeros[i];
        } else {
            todosLosNumerosSonValidos = false;
            break;
        }
    }
    var resultado = {
        suma: suma,
        esValido: todosLosNumerosSonValidos
    };
    return resultado;
}

function saludar (nombre, funcion){
    return `hola ${funcion(nombre)}`;
}

console.log(saludar("david",nombreEnMayusculas));

function nombreEnMayusculas(nombre){
    return nombre.toUpperCase();
}

function nombreEnMinuscula(nombre){
    return nombre.toLowerCase();
}

function restar(a,b){
    return a-b;

}

console.log(restar(4,2));//undefined
console.log(typeof restar);//tipo de la funcion= function
console.log(restar);//definicion de la funcion

//funciones anonimas

var ejemplo= function(){}//funcion anonima

var david = {
    trabajo:function(){
        //implementacion
    }
}

/*saludar("david",function(nombre){
    return nombre + "david"
})

console.log(saludar());*/


let variableDos=2;
variableDos=3;
const edad=23;

const david_2={
    nombre:"david"
}

david.nombre="david2";


const elevarAlCuadrado= (numero)=>{
    return numero*numero;
}







