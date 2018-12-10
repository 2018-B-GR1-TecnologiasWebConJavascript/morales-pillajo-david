import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss']
})
export class GestionUsuariosComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

  hola(){
    return 'Hola';
  }

  imprimir(usuario:Usuario){
    console.log(usuario)
    const indiceUsuarioAEliminar=this.usuarios
      .findIndex((usuario)=>{
        return usuario.identificador==usuario.identificador
      })

    this.usuarios.splice(indiceUsuarioAEliminar,1)
  }

}

export interface Usuario {
  identificador?:number,
  nombre?:string
}
