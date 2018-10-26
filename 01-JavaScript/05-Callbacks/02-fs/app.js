const fs = require('fs');
const nombreArchivo = 'ejemplo.txt';
const contenidoArchivo = new Date();


console.log('Inicio');




fs.readFile(nombreArchivo, 'utf-8',
    (error, textoArchivoLeido) => {//CALLBACK
        if (error) {
            try {
                throw new Error(error)
            } catch (e) {
                console.error(e);
            }
        } else {
            fs.writeFile(nombreArchivo, textoArchivoLeido + '\n' + contenidoArchivo,
                (err) => {
                    if (err) throw err;
                    console.log('Archivo guardado');
                });

            console.log(textoArchivoLeido);
        }
    });



console.log('Fin');