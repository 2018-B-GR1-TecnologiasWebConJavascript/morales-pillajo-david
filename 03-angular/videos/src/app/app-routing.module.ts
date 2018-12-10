import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as path from "path";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {MenuComponent} from "./rutas/menu/menu.component";
import {LoginComponent} from "./rutas/login/login.component";
import {PerfilComponent} from "./rutas/perfil/perfil.component";
import {NotFoundComponent} from "./rutas/not-found/not-found.component";
import {GestionUsuariosComponent} from "./rutas/gestion-usuarios/gestion-usuarios.component";
import {GestionProductosComponent} from "./rutas/gestion-productos/gestion-productos.component";

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'inicio'
  },
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path:'menu',
    component:MenuComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'gestion-productos'
      },
      {
        path:'gestion-usuarios',
        component:GestionUsuariosComponent
      },
      {
        path:'gestion-productos',
        component:GestionProductosComponent
      },
      {
        path:'**',
        redirectTo:'no-encontrado'
      }
    ]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'perfil',
    component: PerfilComponent
  },
  {
    path:'no-encontrado',
    component:NotFoundComponent
  },
  {
    path:'**',
    redirectTo:'no-encontrado'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
