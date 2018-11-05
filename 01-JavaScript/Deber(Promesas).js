const fs = require("fs");
const promesaEjercicio = arregloStrings => {
    return new Promise((resolve, reject) => {
        const respuestas = [];

        arregloStrings.forEach((string, indice) => {
            const nombreArchivo = `${indice}-${string}.txt`;
            const contenido = string;
            fs.writeFile(nombreArchivo, contenido, err => {
                const respuesta = {
                    nombreArchivo: nombreArchivo,
                    contenidoArchivo: contenido,
                    error: err
                };
                respuestas.push(respuesta);

                const estaCompletoElArreglo = respuestas.length === arregloStrings.length;

                if (estaCompletoElArreglo) {
                    resolve(respuestas);
                }
            });
        });
    });
};

promesaEjercicio(["A", "B", "C"])
    .then(respuestaEjercicio => {
        console.log(respuestaEjercicio);
    });