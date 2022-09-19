import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo.model';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  title = '¡Aquí tienes tu lista de la compra!';
  subtitle = 'Tus artículos:';

  indice: number = 0;
  articulos: Articulo[] = [];
  cuadroNombre: string = "";
  cuadroCantidad: number = 0;


  constructor() {

  }

  ngOnInit(): void {
  }

  agregarArticulo() {
    let miArticulo = new Articulo(this.cuadroNombre, this.cuadroCantidad);
    // alert("El artículo " + miArticulo.nombre + " se añadirá a la lista.");
    this.articulos.push(miArticulo);
  }

  eliminarArticulo(indice: number) {
    for (let i = 0; i < this.articulos.length; i++) {
      if (i == indice) {
        this.articulos.slice(indice, 0);
      }
    }
    return this.articulos;
  }
}
