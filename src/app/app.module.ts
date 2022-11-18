import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ArticulosComponent } from './articulos/articulos.component';
import { MatIconModule } from '@angular/material/icon';
import { TitulosComponent } from './titulos/titulos.component';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    TitulosComponent,
    ListaArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
