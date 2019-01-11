import { Component, OnInit } from '@angular/core';
import {RazaRestService} from "../../servicios/rest/raza-rest.service";
import {Raza} from "../../interfaces/raza";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-crear-raza',
  templateUrl: './crear-raza.component.html',
  styleUrls: ['./crear-raza.component.scss']
})
export class CrearRazaComponent implements OnInit {

  raza: RazaEjemplo={
    nombre:'',
    apellido:''
  }


  constructor( private readonly _razaRestService: RazaRestService) { }

  ngOnInit() {
  }


  crearRaza(formulario: NgForm){
    console.log(formulario)

    const crearRaza$ = this._razaRestService
      .create(this.raza.nombre)

    crearRaza$
      .subscribe(
        (raza:Raza)=>{
          console.log('Raza');
          alert(`Raza creada: ${raza.nombre}`)
        },
      (error)=>{
          console.error('Error: ',error)
      }
      )
  }

}

interface RazaEjemplo{
  nombre:string;
  apellido:string
}
