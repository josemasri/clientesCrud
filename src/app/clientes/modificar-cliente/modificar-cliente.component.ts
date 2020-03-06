import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from '../cliente.model';
import { ClientesService } from '../clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.scss']
})
export class ModificarClienteComponent implements OnInit {

  id: number;
  clienteModificado: Cliente;
  grupos: Grupo[];
  clientes: Cliente[];

  constructor(
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes();
    this.clientesService.subject.subscribe(res => {
      this.clientes = this.clientesService.getClientes();
    });
    this.clienteModificado = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  rellenarCampos() {
    if (this.id) {
      this.clienteModificado = this.clientes[this.id];
    }
  }

  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.clienteModificado);
    this.clienteModificado = this.clientesService.nuevoCliente();
  }
  modificar() {
    Swal.fire({
      title: 'Are you sure?',
      text: '¿No podras revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, modificar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Modificado!',
          'El registro se modifico con éxito.',
          'success'
        );
        this.clientesService.modificarCliente(this.clienteModificado);
      }
    });
  }
}
