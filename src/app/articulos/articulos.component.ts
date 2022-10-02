
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../articulo.model';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})

export class ArticulosComponent implements OnInit {

  eliminarTodo = '¿Desea eliminar todo?';

  articulos: Articulo[] = [];
  cuadroNombre: string = "";
  cuadroCantidad: number = 0;


  constructor(private route: Router) {
    this.articulos;
  }

  ngOnInit(): void {
  }

  agregarArticulo() {
    if (this.cuadroNombre == "") {
      alert("Debes rellenar el campo 'Nombre'");
    } else {
      let miArticulo = new Articulo(this.cuadroNombre, this.cuadroCantidad);
      this.articulos.push(miArticulo);
      this.saveArticle();
    }
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
        this.clearArticulos();
      }
    }
  }

  volverLista() {
    this.route.navigate(["/lista"]);
  }

  saveArticle() {
    localStorage.setItem("articulos", JSON.stringify(this.articulos));
  }

  retrieve() {
    return localStorage.getItem("articulos");
  }

  clearArticulos() {
    localStorage.clear();
  }

}


