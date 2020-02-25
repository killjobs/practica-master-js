import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ProductosComponent,
    VentasComponent,
    MenuComponent,
    HomeComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
