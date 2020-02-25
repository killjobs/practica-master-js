import { Injectable } from '@angular/core';
import  { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private listaClientes: Array<Usuario>;

  constructor() {
    this.listaClientes = [
      new Usuario('Julian','Gil','C.C.','1019087634','3192945136','jdgm_1993@yahoo.com',0),
      new Usuario('Sara','Gil','NIUP','1031838253','3219157641','sara_2014@yahoo.com',0)
    ];
   }

   public getClientes(){
     return this.listaClientes
   }
   public setClientes(Usuario,indice){
        this.listaClientes[indice] = new Usuario(Usuario);
   }
}
