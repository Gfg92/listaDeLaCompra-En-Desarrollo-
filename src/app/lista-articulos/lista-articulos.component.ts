import { Component, OnInit, ViewChild } from '@angular/core';
import { Articulo } from '../articulo.model';
import { ArticulosComponent } from '../articulos/articulos.component';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {
  articulos: Articulo[]

  @ViewChild(ArticulosComponent) art:Articulo[];

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.articulos = this.art
  }
}
