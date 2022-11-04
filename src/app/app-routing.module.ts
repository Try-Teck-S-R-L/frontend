import { InformacionequiposComponent } from "./modules/informacionequipos/informacionequipos.component";
import { VistaAdministradorComponent } from "./modules/vista-administrador/vista-administrador.component";
import { ListaJugadoresComponent } from "./modules/lista-jugadores/lista-jugadores.component";
import { VistaPrincipalComponent } from "./modules/vista-principal/vista-principal.component";
import { CredencialComponent } from "./modules/credencial/credencial.component";
import { ListaEquiposComponent } from "./modules/lista-equipos/lista-equipos.component";

import { VistaDelegadoComponent } from "./modules/vista-delegado/vista-delegado.component";
import { ModulesComponent } from "./modules/modules.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsComponent } from "./modules/reactive-forms/reactive-forms.component";
import { InscripcionJugadorComponent } from "./modules/inscripcion-jugador/inscripcion-jugador.component";
import { RegistrarEquipoComponent } from "./modules/registrar-equipo/registrar-equipo.component";
import { EquiposMenuComponent } from "./modules/equipos-menu/equipos-menu.component";
import { MiequipoComponent } from "./modules/miequipo/miequipo.component";
import { PreinscipcionMenuComponent } from "./modules/preinscipcion-menu/preinscipcion-menu.component";
import { EquiposAprobadosComponent } from "./modules/equipos-aprobados/equipos-aprobados.component";
const routes: Routes = [
  {
    path: "preinscripcion/:id",
    component: ReactiveFormsComponent,
  },
  {
    path: "inscripcion",
    component: InscripcionJugadorComponent,
  },
  {
    path: "vistadelegado/:id",
    component: VistaDelegadoComponent,
  },
  {
    path: "registrarequipo/:id",
    component: RegistrarEquipoComponent,
  },
  {
    path: "listaequipos/:id",
    component: ListaEquiposComponent,
  },
  {
    path: "credencial",
    component: CredencialComponent,
  },
  {
    path: "",
    component: VistaPrincipalComponent,
  },
  {
    path: "listajugadores/:id",
    component: ListaJugadoresComponent,
  },
  {
    path: "vistaadmin",
    component: VistaAdministradorComponent,
  },
  {
    path: "informacionequipo/:id",
    component: InformacionequiposComponent,
  },
  {
    path: "equiposmenu",
    component: EquiposMenuComponent,
  },
  {
    path: "preinscipcionesmenu",
    component: PreinscipcionMenuComponent,
  }
  ,
  {
    path: "miequipo",
    component: MiequipoComponent,
  },
  {
    path: "equipoaprobado/:id",
    component: EquiposAprobadosComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
