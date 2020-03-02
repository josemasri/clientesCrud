import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private clientes: Cliente[];
  private grupos: Grupo[];

  subject = new Subject();


  constructor() {
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },

      {
        id: 1,
        nombre: 'Activos'
      },

      {
        id: 2,
        nombre: 'Inactivos'
      },

      {
        id: 3,
        nombre: 'Deudores'
      },
    ];
    this.clientes = [];
  }


  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      cif: '',
      direccion: '',
      grupo: 0
    };
  }

  eliminarCliente(id: number) {
    this.clientes = this.clientes.filter((cliente) => {
      if (cliente.id == id) {
        return false;
      } else {
        return true;
      }
    });
    this.subject.next();
  }

  modificarCliente(cliente: Cliente) {
    this.clientes[cliente.id] = cliente;
    this.subject.next();
  }
}
