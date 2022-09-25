
import { Component, Inject, OnInit } from '@angular/core';
import { Articulo } from '../articulo.model';
import { ServicioDatosService } from '../servicio-datos.service';

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


  constructor(private miServicio: ServicioDatosService) {
    // miServicio.leerFichero();
  }

  ngOnInit(): void {
    this.miServicio.leerFichero();
  }

  agregarArticulo() {
    if (this.cuadroNombre == "") {
      alert("Debes rellenar el campo 'Nombre'");
    } else {
      let miArticulo = new Articulo(this.cuadroNombre, this.cuadroCantidad);
      this.articulos.push(miArticulo);
      let articuloString = JSON.stringify(miArticulo);
      this.miServicio.escribirFichero(articuloString);
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
}


