import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumerosComponent } from './numeros/numeros.component';
import { OperadoresComponent } from './operadores/operadores.component';

@NgModule({
  declarations: [
    AppComponent,
    NumerosComponent,
    OperadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
