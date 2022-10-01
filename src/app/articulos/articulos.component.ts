
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlmacenArticulosService } from '../almacen-articulos.service';
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

  constructor(private route: Router, private almacenServicios: AlmacenArticulosService) {
    almacenServicios.retrieve()
  }

  ngOnInit(): void {

  }

  agregarArticulo() {
    if (this.cuadroNombre == "") {
      alert("Debes rellenar el campo 'Nombre'");
    } else {
      let miArticulo = new Articulo(this.cuadroNombre, this.cuadroCantidad);
      this.articulos.push(miArticulo);
      this.almacenServicios.save(this.articulos)
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
      }
    }
  }

  volverLista() {
    this.route.navigate(["/lista"]);
  }
}


