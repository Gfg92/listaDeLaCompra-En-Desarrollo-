import { Injectable } from '@angular/core';
import { Articulo } from './articulo.model';

@Injectable({
  providedIn: 'root'
})
export class AlmacenArticulosService {

  constructor() { }

  save(art: Articulo[]) {
    localStorage.setItem("articulos", JSON.stringify(art));
  }
  retrieve() {
    return localStorage.getItem("articulos");
  }
}
