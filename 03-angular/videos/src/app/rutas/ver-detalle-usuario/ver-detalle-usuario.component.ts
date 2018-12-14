import { Component, OnInit } from '@angular/core';
import {Usuario, UsuarioServiceService} from "../../servicios/usuario-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ver-detalle-usuario',
  templateUrl: './ver-detalle-usuario.component.html',
  styleUrls: ['./ver-detalle-usuario.component.scss']
})
export class VerDetalleUsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private readonly _usuarioService: UsuarioServiceService,
    private readonly _route: ActivatedRoute
  ) { }


  ngOnInit() {
    const rutaActiva$= this._route.params;

    rutaActiva$
      .subscribe(
        (parametros)=>{
          const usuarioEncontrado=this._usuarioService
            .buscarPorId(+parametros.idUsuario)
          console.log(usuarioEncontrado);
          this.usuario= usuarioEncontrado;
        }
      )
  }

}
