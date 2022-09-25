import { Injectable } from '@angular/core';
import { Articulo } from './articulo.model';


@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  constructor() { }

  escribirFichero(articulo: Articulo[]) {
    const fs = require('fs');
    fs.writeFile('C:\Users\gfg_1\OneDrive\Documentos\IntelliJ\listaDeLaCompra\src\app\articulos.txt', articulo, (err: any) => {
      if (err) {
        console.error(err);
      }
    });
  }

  leerFichero() {
    const fs = require('fs');
    fs.readFile('C:\Users\gfg_1\OneDrive\Documentos\IntelliJ\listaDeLaCompra\src\app\articulos.txt', 'utf8', (err: any, data: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
  }
}
