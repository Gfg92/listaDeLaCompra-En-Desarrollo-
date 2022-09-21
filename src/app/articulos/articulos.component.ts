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
  eliminarTodo = '¿Desea eliminar todo?'

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
    if (this.articulos.length == 0) {
      alert("No hay articulos en la cesta");
    } else {
      if (confirm(this.eliminarTodo)) {
        this.articulos.splice(0, this.articulos.length);
      }
    }
  }
}
