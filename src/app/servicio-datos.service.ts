import { Injectable } from '@angular/core';
import { readFile, writeFile } from 'fs';
import { Articulo } from './articulo.model';


@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  constructor() { }


  escribirFichero(articulo: string) {
    writeFile("articulos.txt", articulo, (error) => {
      if (error) {
        console.log(error);
      }
    });
  }

  leerFichero() {
    readFile('file', 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }

}
