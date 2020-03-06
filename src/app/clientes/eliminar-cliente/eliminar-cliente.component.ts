import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../cliente.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.scss']
})
export class EliminarClienteComponent implements OnInit {

  clientes: Cliente[];
  id: number;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes();
    this.clientesService.subject.subscribe(val => {
      this.clientes = this.clientesService.getClientes();
    });
  }

  eliminar() {
    if (this.id) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'No podras revertir este cambio',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          this.clientesService.eliminarCliente(this.id);
          this.id = null;
          Swal.fire(
            'Eliminado!',
            'El registro se elimino con éxito.',
            'success'
          );
        } else {
          Swal.fire(
            'No se elimino!',
            'No hubieron cambios.',
            'warning'
          );
        }
      });
    }
  }
}
