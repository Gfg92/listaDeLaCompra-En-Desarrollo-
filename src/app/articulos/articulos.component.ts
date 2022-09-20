import { Component, Inject, OnInit } from '@angular/core';
import { Articulo } from '../articulo.model';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  title = '¡Aquí tienes tu lista de la compra!';
  subtitle = 'Tus artículos:';

  articulos: Articulo[] = [];
  cuadroNombre: string = "";
  cuadroCantidad: number = 0;

  constructor() {
    this.articulos;
  }

  ngOnInit(): void {

  }

  agregarArticulo() {
    let miArticulo = new Articulo(this.cuadroNombre, this.cuadroCantidad);
    // alert("El artículo " + miArticulo.nombre + " se añadirá a la lista.");
    this.articulos.push(miArticulo);
  }

  eliminarArticulo(indice: number) {
    this.articulos.splice(indice, 1);
  }

  eliminarTodos() {
    if (confirm("¿Estás segura de que desea eliminar todo?")) {
      this.articulos.splice(0, this.articulos.length);
    }
  }



}
