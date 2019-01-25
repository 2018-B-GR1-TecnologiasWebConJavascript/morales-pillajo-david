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


  crearRaza(razaObjeto){


    //validar

    //if(this.nombreContieneA(razaObjeto.nombre.toString())){

      const crearRaza$ = this._razaRestService
        .create(razaObjeto.nombre, razaObjeto.username, razaObjeto.password)

      crearRaza$
        .subscribe(
          (raza:Raza)=>{
            console.log('Raza');
            alert(`Raza creada: ${raza.nombre}`)
          },
          (error)=>{
            console.error('Error: ',error)
          }
        );
    //}else {
      //alert('ERROR, no contiene una letra a')
    //}

  }


  nombreContieneA(nombre: string):boolean{

    return nombre.toLowerCase().includes('a')
  }
}

interface RazaEjemplo{
  nombre:string;
  apellido:string
}
