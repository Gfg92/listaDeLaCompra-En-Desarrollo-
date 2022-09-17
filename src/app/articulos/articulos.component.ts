import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  title = '¡Carmen! Aquí tienes tu lista de la compra';
  subtitle = 'Aquí tienes tus artículos:';

  
  articulo: string = "Fruta";
  articulos: string[] = ["Pan", "Agua", "Tomates"];

 

  constructor() { }

  ngOnInit(): void {
  }

  agregarArticulo() {
    alert("El artículo " + this.articulo + " se añadirá a la lista.");
    this.articulos.push(this.articulo);
  }
}
