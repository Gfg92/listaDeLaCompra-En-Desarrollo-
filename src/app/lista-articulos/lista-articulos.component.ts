import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../articulo.model';


@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})

export class ListaArticulosComponent implements OnInit {
  @Input() articulos: Articulo[];
  @Input() cuadroNombre: string = "";
  @Input() cuadroCantidad: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
