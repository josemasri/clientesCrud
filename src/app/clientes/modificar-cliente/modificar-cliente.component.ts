import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from '../cliente.model';
import { ClientesService } from '../clientes.service';

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
    this.clientesService.modificarCliente(this.clienteModificado);
  }
}
