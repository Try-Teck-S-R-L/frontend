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
import { InscripcionJugadorComponent } from './modules/inscripcion-jugador/inscripcion-jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavarComponent,
    ModulesComponent,
    ReactiveFormsComponent,
    InscripcionJugadorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
