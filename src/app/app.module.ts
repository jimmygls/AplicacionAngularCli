import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { MenuizquierdoComponent } from './menuizquierdo/menuizquierdo.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiepaginaComponent,
    MenuizquierdoComponent,
    EstudiantesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
