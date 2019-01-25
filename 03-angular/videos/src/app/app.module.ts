import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { LoginComponent } from './rutas/login/login.component';
import { PerfilComponent } from './rutas/perfil/perfil.component';
import { MenuComponent } from './rutas/menu/menu.component';
import { NotFoundComponent } from './rutas/not-found/not-found.component';
import { GestionUsuariosComponent } from './rutas/gestion-usuarios/gestion-usuarios.component';
import { GestionProductosComponent } from './rutas/gestion-productos/gestion-productos.component';
import {UsuarioServiceService} from "./servicios/usuario-service.service";
import { VerDetalleUsuarioComponent } from './rutas/ver-detalle-usuario/ver-detalle-usuario.component';
import {HttpClientModule} from "@angular/common/http";
import {RazaRestService} from "./servicios/rest/raza-rest.service";
import { CrearRazaComponent } from './rutas/crear-raza/crear-raza.component';
import {FormsModule} from "@angular/forms";
import { ActualizarRazaComponent } from './rutas/actualizar-raza/actualizar-raza.component';
import { ImagenPeliculaComponent } from './Componentes/imagen-pelicula/imagen-pelicula.component';
import { FormularioRazaComponent } from './Componentes/formulario-raza/formulario-raza.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    LoginComponent,
    PerfilComponent,
    MenuComponent,
    NotFoundComponent,
    GestionUsuariosComponent,
    GestionProductosComponent,
    VerDetalleUsuarioComponent,
    CrearRazaComponent,
    ActualizarRazaComponent,
    ImagenPeliculaComponent,
    FormularioRazaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsuarioServiceService,
    RazaRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
