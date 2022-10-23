import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./modules/header/header.component";
import { FooterComponent } from "./modules/footer/footer.component";
import { NavarComponent } from "./modules/navar/navar.component";
import { ModulesComponent } from "./modules/modules.component";
import { ReactiveFormsComponent } from "./modules/reactive-forms/reactive-forms.component";
import { HttpClientModule } from "@angular/common/http";

import { InscripcionJugadorComponent } from './modules/inscripcion-jugador/inscripcion-jugador.component';
import { VistaDelegadoComponent } from './modules/vista-delegado/vista-delegado.component';
import { RegistrarEquipoComponent } from './modules/registrar-equipo/registrar-equipo.component';
import { ListaEquiposComponent } from "./modules/lista-equipos/lista-equipos.component";
import { CredencialComponent } from './modules/credencial/credencial.component';
import { QRCodeModule } from 'angular2-qrcode';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { VistaPrincipalComponent } from './modules/vista-principal/vista-principal.component';
import { ListaJugadoresComponent } from './modules/lista-jugadores/lista-jugadores.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavarComponent,
    ModulesComponent,
    ReactiveFormsComponent,
    InscripcionJugadorComponent,
    VistaDelegadoComponent,
    RegistrarEquipoComponent,
    ListaEquiposComponent,
    CredencialComponent,
    VistaPrincipalComponent,
    ListaJugadoresComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, QRCodeModule, 
            BrowserAnimationsModule,MatTableModule,MatSortModule,MatListModule,MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule {}
