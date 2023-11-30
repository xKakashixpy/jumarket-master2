import { Component, OnInit } from '@angular/core';
import { ClProducto } from '../model/ClProducto';

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.page.html',
  styleUrls: ['./product-all.page.scss'],
})
export class ProductAllPage implements OnInit {
  msgError = "";

  producto: ClProducto = {
    codigo: '',
    nombreprod: '',
    precio: 0,
    cantidad: 0,
    rut: 0,
    dv: '',
    enfermedad: '',
    fonocontacto: 0,
    categoria: '',
    editorial: '',
    raza: '',
    edad: 0,
    altura: 0,
    hrini: '',
    hrfin: '',
    direccion: '',
  };

  constructor() { }

  ngOnInit() { }

  public id: string = '';

  leer() {
    // Lógica para leer
  }

  eliminar() {
    // Lógica para eliminar
  }

  grabar() {
    // Lógica para grabar
  }

  actualizar() {
    // Lógica para actualizar
  }

  grabarActualizarAutomatico() {
    // Lógica para grabar o actualizar automáticamente
  }
}
