import { ModulesComponent } from './modules/modules.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './modules/reactive-forms/reactive-forms.component';
import { InscripcionJugadorComponent } from './modules/inscripcion-jugador/inscripcion-jugador.component';

const routes: Routes = [
  {
    path:'preinscripcion',
    component:ReactiveFormsComponent
  },
  {
    path:'inscripcion',
    component:InscripcionJugadorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
