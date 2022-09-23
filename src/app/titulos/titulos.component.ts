import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {

  title = '¡Aquí tienes tu lista de la compra!';
  subtitle = 'Tus artículos:';

  constructor() { }

  ngOnInit(): void {
  }

}
