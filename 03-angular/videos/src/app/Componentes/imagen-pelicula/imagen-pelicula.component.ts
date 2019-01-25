import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OuterSubscriber} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-imagen-pelicula',
  templateUrl: './imagen-pelicula.component.html',
  styleUrls: ['./imagen-pelicula.component.scss']
})
export class ImagenPeliculaComponent implements OnInit {

  @Input()//pr
  nombre: string;

  @Input()
  titulo: string;

  @Input()
  anio: string;

  @Output()
  dioClick=new EventEmitter()

  constructor() { }

  ngOnInit() {
  }


  lanzarEventoDioClick(){
    const objetoPelicula={
      titulo: this.titulo,
      anio: this.anio,
      nombre: this.nombre
    };

    this.dioClick.emit(objetoPelicula)
  }
}
