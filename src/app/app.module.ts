import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ArticulosComponent } from './articulos/articulos.component';


/*const appRoutes: Routes = [
  { path: "lista", component:},
  { path: "editar-articulo", component:},
]*/

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticulosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
