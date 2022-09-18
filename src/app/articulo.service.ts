import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  nombre: String = "";
  cantidad: Number = 0;

  constructor(nombre: String, cantidad: Number) {
    this.nombre = nombre;
    this.cantidad = cantidad;
  }

}
