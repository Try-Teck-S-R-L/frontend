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
import { EliminarjugadoresComponent } from "./modules/eliminarjugadores/eliminarjugadores.component";
import { CredencialesInternasComponent } from "./modules/credenciales-internas/credenciales-internas.component";
import { VistaErrorComponent } from "./modules/vista-error/vista-error.component";
import { ListaPreinscripcionDelegadoComponent } from "./modules/lista-preinscripcion-delegado/lista-preinscripcion-delegado.component";
import { MenuPreinscripcionDelegadoComponent } from "./modules/menu-preinscripcion-delegado/menu-preinscripcion-delegado.component";
import { EliminarPreinscripcionDelegadoComponent } from "./modules/eliminar-preinscripcion-delegado/eliminar-preinscripcion-delegado.component";
import { EditarPreinscripcionDelegadoComponent } from "./modules/editar-preinscripcion-delegado/editar-preinscripcion-delegado.component";
import { EditarPreDeleComponent } from "./modules/editar-pre-dele/editar-pre-dele.component";
import { InformacionPreDeleComponent } from "./modules/informacion-pre-dele/informacion-pre-dele.component";
import { InformacionjugadorComponent } from "./modules/informacionjugador/informacionjugador.component";
import { LoginComponent } from "./modules/login/login.component";
import { MainPageComponent } from "./modules/main-page/main-page.component";
import { EquiposgeneralComponent } from "./modules/equiposgeneral/equiposgeneral.component";
import { RegisterdelegadoComponent } from "./modules/registerdelegado/registerdelegado.component";
import { BeforeLoginService } from "./services/before-login.service";
import { AfterLoginService } from "./services/after-login.service";
import { MenuAdminComponent } from "./modules/menu-admin/menu-admin.component";
import { JugadoresgenealComponent } from "./modules/jugadoresgeneal/jugadoresgeneal.component";
import { EvaluarPreinsComponent } from "./modules/evaluar-preins/evaluar-preins.component";
import { ListaPreinsEvaluarComponent } from "./modules/lista-preins-evaluar/lista-preins-evaluar.component";


const routes: Routes = [
  {
    //
    path: "preinscripcion",
    component: ReactiveFormsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "inscripcion/:id",
    component: InscripcionJugadorComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "vistadelegado",
    component: VistaDelegadoComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "registrarequipo/:id",
    component: RegistrarEquipoComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "listaequipos",
    component: ListaEquiposComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "credencial/:id",
    component: CredencialComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: "",
    component: VistaPrincipalComponent,
  },
  {
    path: "listajugadores/:id",
    component: ListaJugadoresComponent,
    //canActivate: [AfterLoginService]
  },
  {
    //admin
    path: "vistaadmin",
    component: VistaAdministradorComponent,
   // canActivate: [AfterLoginService]
  },
  {
    //admin
    path: "informacionequipo/:id",
    component: InformacionequiposComponent,
    //canActivate: [AfterLoginService]
  },
  {
    path: "equiposmenu/:id",
    component: EquiposMenuComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "preinscipcionesmenu",
    component: PreinscipcionMenuComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "miequipo/:id",
    component: MiequipoComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "equipoaprobado",
    component: EquiposAprobadosComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "eliminarjugador/:id",
    component: EliminarjugadoresComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "credencialinterna/:id",
    component: CredencialesInternasComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "vistaerror/:mensaje",
    component: VistaErrorComponent,

  },
  {
    path: "listapredelegado",
    component: ListaPreinscripcionDelegadoComponent,
   canActivate: [AfterLoginService]
  },
  {
    path: "menupredelegado",
    component: MenuPreinscripcionDelegadoComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "eliminarpredelegado",
    component: EliminarPreinscripcionDelegadoComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "editarpredelegado",
    component: EditarPreinscripcionDelegadoComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "editarformulariopre/:id",
    component: EditarPreDeleComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "inforformulariopre/:id",
    component: InformacionPreDeleComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "infojugador/:id",
    component: InformacionjugadorComponent,
    //canActivate: [AfterLoginService]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: "todosequipos",
    component: EquiposgeneralComponent,
  },
  
  {
    path: "registro",
    component: RegisterdelegadoComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: "menuadmin",
    component: MenuAdminComponent,
    //canActivate: [BeforeLoginService]
  },
  {
    path: "mainpage",
    component: MainPageComponent,
    //canActivate: [BeforeLoginService]
  },{
    path: "jugadoresgeneral/:id",
    component: JugadoresgenealComponent,
    //canActivate: [BeforeLoginService]
  },
  {
    path: "evaluarpreins/:id",
    component: EvaluarPreinsComponent,
    //canActivate: [BeforeLoginService]
  },{
    path: "listaevaluar",
    component: ListaPreinsEvaluarComponent,
    //canActivate: [BeforeLoginService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
