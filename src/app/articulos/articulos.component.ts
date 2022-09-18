import { Component, OnInit } from '@angular/core';
import { ValueFromArray } from 'rxjs';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  title = '¡Carmen! Aquí tienes tu lista de la compra';
  subtitle = 'Aquí tienes tus artículos:';

  articulos: string[] = ["pan", "agua"];

  constructor() {

  }

  ngOnInit(): void {
  }

  agregarArticulo(value: any) {
    alert("El artículo " + value + " se añadirá a la lista.");
    this.articulos.push(value);
  }
}
