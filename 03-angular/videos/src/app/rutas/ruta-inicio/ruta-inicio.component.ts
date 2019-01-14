import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {

  imagenes: Imagenes[] = [
    {
      nombreImagen:'01.jpg',
      nombrePelicula:'EndGame',
      anio:2019
    },
    {
      nombreImagen:'02.jpg',
      nombrePelicula:'IronMan',
      anio:2008
    },
    {
      nombreImagen:'03.png',
      nombrePelicula:'CaptainMarvel',
      anio:2019
    },
    {
      nombreImagen:'04.jpeg',
      nombrePelicula:'Spiderman',
      anio:2019
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface Imagenes{
  nombreImagen: string;
  nombrePelicula: string;
  anio: number;
}
