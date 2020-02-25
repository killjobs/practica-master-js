import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { HomeComponent } from './componentes/home/home.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'ventas', component: VentasComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
