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

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    LoginComponent,
    PerfilComponent,
    MenuComponent,
    NotFoundComponent,
    GestionUsuariosComponent,
    GestionProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
