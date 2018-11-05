
let edad: number | string = 13;
let nombre : string='David';
let casado : boolean= false;
let variableLoca = false;
let david: {
    nombre: string;

}={
    nombre: 'Adrian'
};
const numeros : number[]=[1,2,3,4];

let fechaNacimiento : Date = new Date();

/*let promesa : Promise = () =>{
    return new Promise(
        (resolve, reject)=>{
            resolve(1);
        }
    )
}*/
function saludar(nombre: String, apellido?: string , ...otrosNombres: string []) : any{
    respuestaSaludar = '';
    return '';
}

saludar('David', 'Morales', '','','');


let respuestaSaludar= <string> saludar ('David','Morales')
respuestaSaludar= ''

const saludo = (nombre: string ): number =>{
    return 1;
}
console.log()

class Usuario {
    public edad: string;
    nombre;
    constructor(){

    }
    private saludar (nombre: string): string{
        return nombre;
    }
}

const davidInst = new Usuario();

interface UsuarioInterface{
    nombre: string;
    apellido?: string;
}

class UsuarioDummy{
    nombre: string;
    apellido?:string;
}

const david2: UsuarioInterface={
    nombre:'david',
    apellido: 'morales'
}