import { Component, OnInit } from '@angular/core';
import {Usuario, UsuarioServiceService} from "../../servicios/usuario-service.service";

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss']
})
export class GestionUsuariosComponent implements OnInit {

  usuarios=[];

  //inyeccion de dependencias
  constructor(
    private readonly _usuarioService: UsuarioServiceService
  ) {

  }

  ngOnInit() {

    this.usuarios=this._usuarioService.usuarios;
  }

  eliminar (usuario:Usuario){
    this._usuarioService.eliminar(usuario.identificador);
  }




}

