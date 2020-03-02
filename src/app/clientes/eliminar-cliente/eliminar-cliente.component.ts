import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../cliente.model';

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
      this.clientesService.eliminarCliente(this.id);
      this.id = null;
    }
  }
}
