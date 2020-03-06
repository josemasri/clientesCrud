import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { FormsModule } from '@angular/forms';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { EliminarClienteComponent } from './eliminar-cliente/eliminar-cliente.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




@NgModule({
  declarations: [AltaClienteComponent, ListadoClientesComponent, EliminarClienteComponent, ModificarClienteComponent],
  imports: [
    CommonModule,
    FormsModule,
    SweetAlert2Module
  ],
  exports: [AltaClienteComponent, ListadoClientesComponent, EliminarClienteComponent, ModificarClienteComponent]
})
export class ClientesModule { }
