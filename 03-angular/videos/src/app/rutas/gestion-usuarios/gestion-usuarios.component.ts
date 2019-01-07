import { Component, OnInit } from '@angular/core';
import {Usuario, UsuarioServiceService} from "../../servicios/usuario-service.service";
import {RazaRestService} from "../../servicios/rest/raza-rest.service";
import {Raza} from "../../interfaces/raza";

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss']
})
export class GestionUsuariosComponent implements OnInit {

  usuarios=[];

  //inyeccion de dependencias
  constructor(
    private readonly _razaRestService: RazaRestService
  ) {

  }

  ngOnInit() {

    const razas$ = this._razaRestService.findAll();
    razas$.subscribe(
      (razas:Raza[])=>{
        this.usuarios=razas;
        console.log(razas);
      },
    (error)=>{
        console.log('Error',error);
    }
    )
  }

  eliminar (raza:Raza){
    const razaEliminada$=this._razaRestService.delete(raza.id)
    razaEliminada$.subscribe(
      (razaEliminada:Raza)=>{
        console.log('Se eliminó', razaEliminada);

        const indice = this.usuarios
          .findIndex((r)=>r.id===raza.id);

        this.usuarios.splice(indice,1);
      },
    (error)=>{
        console.error('Error',error);
    }
    )
  }




}

