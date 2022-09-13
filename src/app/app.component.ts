import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '¡Carmen! Aquí tienes tu lista de la compra';
  subtitle = 'Aquí tienes tus artículos:';
  // articulo:string = "";
  articulos: string[] = [];

  agregarArticulo(articulo: string) {
    this.articulos.push(articulo);
    alert("El artículo " + articulo + " se ha añadido a la lista.")
  }


}
