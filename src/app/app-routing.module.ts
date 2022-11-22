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



const routes: Routes = [
  {
    path: "preinscripcion/:id",
    component: ReactiveFormsComponent,
  },
  {
    path: "inscripcion/:id",
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
    path: "credencial/:id",
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
    path: "equiposmenu/:id",
    component: EquiposMenuComponent,
  },
  {
    path: "preinscipcionesmenu",
    component: PreinscipcionMenuComponent,
  }
  ,
  {
    path: "miequipo/:id",
    component: MiequipoComponent,
  },
  {
    path: "equipoaprobado/:id",
    component: EquiposAprobadosComponent,
  },
  {
    path: "eliminarjugador/:id",
    component: EliminarjugadoresComponent,
  } ,
  {
    path: "credencialinterna/:id",
    component: CredencialesInternasComponent,
  },
  {
    path: "vistaerror/:mensaje",
    component: VistaErrorComponent,
  },
  {
    path: "listapredelegado/:id",
    component: ListaPreinscripcionDelegadoComponent,
  },
  {
    path: "menupredelegado/:id",
    component: MenuPreinscripcionDelegadoComponent,
  },
  {
    path: "eliminarpredelegado/:id",
    component: EliminarPreinscripcionDelegadoComponent,
  },
  {
    path: "editarpredelegado/:id",
    component: EditarPreinscripcionDelegadoComponent,
  },
  {
    path: "editarformulariopre/:id",
    component: EditarPreDeleComponent,
  },
  {
    path: "inforformulariopre/:id",
    component: InformacionPreDeleComponent,
  },
  {
    path: "infojugador/:id",
    component: InformacionjugadorComponent,
  }
  ,
  {
    path: "login",
    component: LoginComponent,
  }
];    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
