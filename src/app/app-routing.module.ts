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
import { InfoJugadoresGeneralComponent } from "./modules/info-jugadores-general/info-jugadores-general.component";
import { InfoEquipoGeneralComponent } from "./modules/info-equipo-general/info-equipo-general.component";
import { TodosjugadoresComponent } from "./todosjugadores/todosjugadores.component";
import { LoginAdminComponent } from "./modules/login-admin/login-admin.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { OnlyAdminGuard } from "./guards/only-admin.guard";
import { NotAdminGuard } from "./guards/not-admin.guard";
import { DelegadoGuard } from "./guards/delegado.guard";
import { NotDelegadoGuard } from "./guards/not-delegado.guard";
const routes: Routes = [

  //DELEGADO

  {
    path: "vistadelegado",
    component: VistaDelegadoComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "preinscripcion",
    component: ReactiveFormsComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "inscripcion/:id",
    component: InscripcionJugadorComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "registrarequipo/:id",
    component: RegistrarEquipoComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "listaequipos",
    component: ListaEquiposComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "credencial/:id",
    component: CredencialComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },

  {
    path: "",
    component: VistaPrincipalComponent,
  },
  {
    path: "listajugadores/:id",
    component: ListaJugadoresComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard]
  },
  {
    path: "equiposmenu/:id",
    component: EquiposMenuComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "preinscipcionesmenu",
    component: PreinscipcionMenuComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "miequipo/:id",
    component: MiequipoComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "equipoaprobado",
    component: EquiposAprobadosComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "eliminarjugador/:id",
    component: EliminarjugadoresComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "credencialinterna/:id",
    component: CredencialesInternasComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "vistaerror/:mensaje",
    component: VistaErrorComponent,
  },
  {
    path: "listapredelegado",
    component: ListaPreinscripcionDelegadoComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "menupredelegado",
    component: MenuPreinscripcionDelegadoComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "editarpredelegado",
    component: EditarPreinscripcionDelegadoComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "inforformulariopre/:id",
    component: InformacionPreDeleComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "editarformulariopre/:id",
    component: EditarPreDeleComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },
  {
    path: "eliminarpredelegado",
    component: EliminarPreinscripcionDelegadoComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },

  {
    path: "infojugador/:id",
    component: InformacionjugadorComponent,
    canActivate: [AfterLoginService, DelegadoGuard, NotAdminGuard],
  },


  /////////ADMINISTRADOR
  {
    //admin
    path: "vistaadmin",
    component: VistaAdministradorComponent,
    canActivate: [OnlyAdminGuard, NotDelegadoGuard],
  },
  {
    //admin
    path: "informacionequipo/:id",
    component: InformacionequiposComponent,
    canActivate: [OnlyAdminGuard, NotDelegadoGuard],
  },
  {
    path: "menuadmin",
    component: MenuAdminComponent,
    canActivate: [OnlyAdminGuard, NotDelegadoGuard],
  },
  {
    path: "evaluarpreins/:id",
    component: EvaluarPreinsComponent,
    canActivate: [OnlyAdminGuard, NotDelegadoGuard],
  },
  {
    path: "listaevaluar",
    component: ListaPreinsEvaluarComponent,
    canActivate: [OnlyAdminGuard, NotDelegadoGuard],
  },

  ////TODOS LOS USUARIOS
  
  {
    path: "login",
    component: LoginComponent,
    canActivate: [BeforeLoginService],
  },

  {
    path: "registro",
    component: RegisterdelegadoComponent,
    //canActivate: [BeforeLoginService],
  },

  {
    path: "mainpage",
    component: MainPageComponent,
    //vista para todos los usuarios
  },
  {
    path: "todosequipos",
    component: EquiposgeneralComponent,
  },
  {
    path: "jugadoresgeneral/:id",
    component: JugadoresgenealComponent,
    //vista para todos los usuarios
  },
  {
    path: "infojugadoresgeneral/:id",
    component: InfoJugadoresGeneralComponent,
    //vista para todos los usuarios
  },
  {
    path: "infoequiposgeneral/:id",
    component: InfoEquipoGeneralComponent,
    //vista para todos los usuarios
  },
  {
    path: "todosjugadores",
    component: TodosjugadoresComponent,
    //vista para todos los usuarios
  },
  {
    path: "admin",
    component: LoginAdminComponent,
    // canActivate: [BeforeLoginService],
  },
  {
    path: "**",
    component: NotfoundComponent,
    //canActivate: [BeforeLoginService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
