import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { ArticulosComponent } from './articulos/articulos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { TitulosComponent } from './titulos/titulos.component';




/*const appRoutes: Routes = [
  { path: "lista", component:},
  { path: "editar-articulo", component:},
]*/

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    TitulosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot(appRoutes)
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
