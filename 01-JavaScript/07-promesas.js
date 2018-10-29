


const fs = require('fs');
const nombre='8-texto-txt';

const nuevaPromesa = (nombreArchivo)=>{
    return new Promise(
    (resolve, reject)=>{
        fs.readFile(
            nombreArchivo,
                'utf-8',
            (err,contenidoLeidoDelArchivo)=>{
                if (err){
                    reject(err);
                    console.log('err');
                }else {
                    resolve(contenidoLeidoDelArchivo);
                    console.log('si');
                }
            }
        )

        }
    )

};

const nuevaPromesaEscritura = (nombreArchivo, contenidoArchivo)=>{
    return new Promise(
        (resolve, reject)=>{
            fs.writeFile(
                nombreArchivo,
                contenidoArchivo,
                'utf-8',
                (err,contenidoArchivo)=>{
                    if (err){
                        reject(err);
                    }else {
                        resolve(contenidoArchivo);
                    }
                }
            )

        }
    )

};

console.log(nuevaPromesa);

nuevaPromesa(nombre)
    .then(
        (contenido)=>{
            console.log( contenido);
            return nuevaPromesaEscritura('07-ejemplo2.txt', 'Adios amigos');
        }
    )
    .then(
        (contenidoDelArchivoEscrito)=>{
            console.log(contenidoDelArchivoEscrito);
        }
    )
    .catch(
        (error)=>{
            console.error(error);
        }
);

