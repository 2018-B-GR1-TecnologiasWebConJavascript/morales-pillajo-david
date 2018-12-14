import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  usuarios: Usuario[]=[
    {
      identificador:1,
      nombre:"david"
    },
    {
      identificador:2,
      nombre:"morales"
    }
  ]

  registroActual=3;

  crear(nuevoUsario: Usuario):Usuario{
    nuevoUsario.identificador=this.registroActual;
    this.usuarios.push(nuevoUsario);
    this.registroActual++;
    return nuevoUsario;
  }

  eliminar(id:number){
    const indiceUsuario= this.usuarios
      .findIndex(
        (usuario)=>{
          return usuario.identificador===id;
        }
      )
    const usuarioBorrado= JSON.parse(
      JSON.stringify(this.usuarios[indiceUsuario])
    )

    this.usuarios.splice(indiceUsuario,1);
    return usuarioBorrado;
  }

  actualizar(id:number, usuarioActualizado:Usuario){
    const indiceUsuario= this.usuarios
      .findIndex(
        (usuario)=>{
          return usuario.identificador===id;
        }
      );

    this.usuarios[indiceUsuario]= usuarioActualizado
    return usuarioActualizado;
  }

  buscarPorId(id:number){
    return this.usuarios
      .find((usuario)=>usuario.identificador===id);
  }

  constructor() { }
}


export interface Usuario {
  identificador?:number,
  nombre?:string
}
