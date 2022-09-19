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
    
  }

  ngOnInit(): void {
  }

  agregarArticulo() {
    let miArticulo = new Articulo(this.cuadroNombre, this.cuadroCantidad);
   // alert("El artículo " + miArticulo.nombre + " se añadirá a la lista.");
    this.articulos.push(miArticulo);
    this.writeArticle();
  }

  writeArticle(){
    const fs = require("fs");
    fs.writeFileSync("./resources/articulos.txt", this.articulos);
  }
}
