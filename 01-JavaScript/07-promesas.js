


const fs = require('fs');
const nombre='8-texto-txt';
const nombre_2='06-texto-txt';


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


const promesaAppend =(nombreArchivo, contenido )=>{
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

function appendFile(nombreArchivo, contenido) {
    nuevaPromesa("07-ejemplo.txt")
        .then(contenido => {
            console.log(contenido);
            return nuevaPromesaEscritura(
                "07-ejemplo2.txt",
                contenido + "Adios amigos"
            );
        })
        .then(contenidoArchivoEscrito => {
            console.log(contenidoArchivoEscrito);
        })
        .catch(error => {
            console.log("Catch", error);
        });
}

appendFile("06-texto.txt", "\nHola amigos");