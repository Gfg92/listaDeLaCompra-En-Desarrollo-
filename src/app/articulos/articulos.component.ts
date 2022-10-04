
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../articulo.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})

export class ArticulosComponent implements OnInit {

  eliminarTodo = '¿Desea eliminar todo?';

  articulos: Articulo[] = [
    // new Articulo("cocacola", 2),
    // new Articulo("fanta", 1),
    // new Articulo("agua", 4)
  ];
  cuadroNombre: string = "";
  cuadroCantidad: number = 0;

  constructor(private route: Router, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getArticulos().subscribe();
  }


  agregarArticulo() {
    if (this.cuadroNombre == "") {
      alert("Debes rellenar el campo 'Nombre'");
    } else {
      let miArticulo = new Articulo(this.cuadroNombre, this.cuadroCantidad);
      this.articulos.push(miArticulo);
      this.dataService.saveArticulos(this.articulos);
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
    this.route.navigate([""]);
  }
}


