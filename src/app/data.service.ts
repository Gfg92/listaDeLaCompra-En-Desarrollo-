import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from './articulo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService: HttpClient) { }


  saveArticulos(articulos: Articulo[]) {
    this.httpService.put('https://mis-articulos-e6b35-default-rtdb.europe-west1.firebasedatabase.app/', articulos).subscribe();
  }





  
}
