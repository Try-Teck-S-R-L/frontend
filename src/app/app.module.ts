import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { NavarComponent } from './modules/navar/navar.component';
import { ModulesComponent } from './modules/modules.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavarComponent,
    ModulesComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
