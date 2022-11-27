import { MainPageComponent } from './modules/main-page/main-page.component';
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

import { InscripcionJugadorComponent } from "./modules/inscripcion-jugador/inscripcion-jugador.component";
import { VistaDelegadoComponent } from "./modules/vista-delegado/vista-delegado.component";
import { RegistrarEquipoComponent } from "./modules/registrar-equipo/registrar-equipo.component";
import { ListaEquiposComponent } from "./modules/lista-equipos/lista-equipos.component";
import { CredencialComponent } from "./modules/credencial/credencial.component";
import { QRCodeModule } from "angular2-qrcode";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { VistaPrincipalComponent } from "./modules/vista-principal/vista-principal.component";
import { ListaJugadoresComponent } from "./modules/lista-jugadores/lista-jugadores.component";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { VistaAdministradorComponent } from "./modules/vista-administrador/vista-administrador.component";
import { MatButtonModule } from "@angular/material/button";
import { InformacionequiposComponent } from "./modules/informacionequipos/informacionequipos.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { PreinscipcionMenuComponent } from './modules/preinscipcion-menu/preinscipcion-menu.component';
import { EquiposMenuComponent } from './modules/equipos-menu/equipos-menu.component';
import { MiequipoComponent } from './modules/miequipo/miequipo.component';
import { EquiposAprobadosComponent } from './modules/equipos-aprobados/equipos-aprobados.component';
import { EliminarjugadoresComponent } from './modules/eliminarjugadores/eliminarjugadores.component';
import { CredencialesInternasComponent } from './modules/credenciales-internas/credenciales-internas.component';
import { VistaErrorComponent } from './modules/vista-error/vista-error.component';
import { ListaPreinscripcionDelegadoComponent } from './modules/lista-preinscripcion-delegado/lista-preinscripcion-delegado.component';
import { MenuPreinscripcionDelegadoComponent } from './modules/menu-preinscripcion-delegado/menu-preinscripcion-delegado.component';
import { EliminarPreinscripcionDelegadoComponent } from './modules/eliminar-preinscripcion-delegado/eliminar-preinscripcion-delegado.component';
import { EditarPreinscripcionDelegadoComponent } from './modules/editar-preinscripcion-delegado/editar-preinscripcion-delegado.component';
import { InformacionPreDeleComponent } from './modules/informacion-pre-dele/informacion-pre-dele.component';
import { EditarPreDeleComponent } from './modules/editar-pre-dele/editar-pre-dele.component';
import { InformacionjugadorComponent } from './modules/informacionjugador/informacionjugador.component';

import { LoginComponent } from './modules/login/login.component';
import { EquiposgeneralComponent } from './modules/equiposgeneral/equiposgeneral.component';
import { RegisterdelegadoComponent } from './modules/registerdelegado/registerdelegado.component';

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
    VistaAdministradorComponent,
    InformacionequiposComponent,
    PreinscipcionMenuComponent,
    EquiposMenuComponent,
    MiequipoComponent,
    EquiposAprobadosComponent,
    EliminarjugadoresComponent,
    CredencialesInternasComponent,
    VistaErrorComponent,
    ListaPreinscripcionDelegadoComponent,
    MenuPreinscripcionDelegadoComponent,
    EliminarPreinscripcionDelegadoComponent,
    EditarPreinscripcionDelegadoComponent,
    InformacionPreDeleComponent,
    EditarPreDeleComponent,
    InformacionjugadorComponent,
    LoginComponent,
    MainPageComponent,
    EquiposgeneralComponent,
    RegisterdelegadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QRCodeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
