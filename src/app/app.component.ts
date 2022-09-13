import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '¡Carmen! Aquí tienes tu lista de la compra';
  subtitle = 'Aquí tienes tus artículos:';
  articulo: string = "Fruta";
  articulos: string[] = ["Pan", "Agua", "Tomates"];

  agregarArticulo() {
    alert("El artículo " + this.articulo + " se añadirá a la lista.");
    this.articulos.push(this.articulo);
  }


}
