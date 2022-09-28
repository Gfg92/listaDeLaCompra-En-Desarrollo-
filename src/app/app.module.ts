import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArticulosComponent } from './articulos/articulos.component';
import { MatIconModule } from '@angular/material/icon';
import { TitulosComponent } from './titulos/titulos.component';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';

const appRoutes: Routes = [
  { path: "lista", component: ListaArticulosComponent},
  { path: "editar-articulo", component: ArticulosComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    TitulosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
