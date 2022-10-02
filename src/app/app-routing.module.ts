import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';

const appRoutes: Routes = [
  { path: "", component: ListaArticulosComponent},
  { path: "editar-articulo", component: ArticulosComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
