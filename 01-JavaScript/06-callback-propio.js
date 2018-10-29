

const fs = require('fs');

let contenidoFinal='Inicial';

function appendFile(nombreArchivo, contenido, callback){
    fs.readFile(
        nombreArchivo,'utf-8',
        (error,  contenidoLLeidoDelArchivo)=>{
            if(error){
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err)=>{
                        if(err){
                            callback(undefined,err);
                        }else{
                            callback(contenido);
                        }
                    }

                );
            }else{
                fs.writeFile(
                    nombreArchivo,
                    contenidoLeidoDelArchivo + contenido,
                    (err)=>{
                        if(err){
                            callback(undefined,err);
                        }else{
                            callback(contenidoLeidoDelArchivo+contenido);
                        }
                    }
                );

            }
        }
    )
}

appendFile(
    '06-texto-txt',
    'Hola amigos',
    (contenido, err)=>{
        if (err){
            console.log(err);
        }else {
            console.log(contenido);
        }

    }
);

console.log(contenidoFinal);