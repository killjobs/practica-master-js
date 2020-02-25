import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit {
  public listaClientes:Usuario[];
  constructor(public _usuarioService: UsuariosService) { 
    this.listaClientes = this._usuarioService.getClientes();
  }

  ngOnInit() {
      console.log(this.listaClientes);
  }

}
