import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  nombre: String = "";
  cantidad: Number = 0;
  
  constructor(nombre: String, cantidad: Number) {
    this.nombre = nombre;
    this.cantidad = cantidad;
  }

  ngOnInit(): void {
  }

}
