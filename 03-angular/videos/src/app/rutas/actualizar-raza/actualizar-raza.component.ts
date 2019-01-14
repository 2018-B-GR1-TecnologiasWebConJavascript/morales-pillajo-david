import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {RazaRestService} from "../../servicios/rest/raza-rest.service";
import {Raza} from "../../interfaces/raza";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-actualizar-raza',
  templateUrl: './actualizar-raza.component.html',
  styleUrls: ['./actualizar-raza.component.scss']
})
export class ActualizarRazaComponent implements OnInit {

  razaAActualizar: Raza;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _razaRestService: RazaRestService,
    private readonly _router: Router
  ) { }

  ngOnInit() {
    const rutaActiva$= this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaActualizarRaza)=>{
          const raza$= this._razaRestService.findOneById(parametros.idRaza)
        raza$
          .subscribe(
            (raza:Raza)=>{
              console.log(raza);
              this.razaAActualizar =raza;
            },
            (error)=>{
              console.error('Error: ',error)
            }
          )

        }
      )

  }

  buscarRaza(idRaza) {
    const raza$ = this._razaRestService
      .findOneById(idRaza);

    raza$
      .subscribe(
        (raza: Raza) => {
          console.log(raza);
        },
        (error) => {
          console.error('Error: ', error);
        }
      );
  }

  actualizarRaza(formulario:NgForm){
    const razaActualizada$ = this._razaRestService
                              .updateOneById(this.razaAActualizar);

    razaActualizada$
      .subscribe(
        (razaActualizada:Raza)=>{
          console.log(razaActualizada);
          const url =['/menu', 'gestion-usuarios']

          alert ('Raza actualizada '+ razaActualizada.nombre)

          this._router.navigate(url)
        },
        (error)=>{
          console.error('Error: ', error)
        }
      )
  }

}

interface ParametrosRutaActualizarRaza {
  idRaza: string;
}
