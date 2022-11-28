import { DelegadoI } from "./../models/delegado.interface";
import { error } from "@angular/compiler/src/util";
import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { DelegadoService } from "src/app/services/delegado.service";
import { ElementolistaService } from "src/app/services/elementolista.service";
import { EquipoService } from "src/app/services/equipo.service";
import { PreinscripcionService } from "src/app/services/preinscripcion.service";
import data from "../../../assets/Archivos/data.json";

import { PreinscripcionI } from "../models/preinscripcion.interface";
import { ResponseI } from "../models/response.interface";
import { Location } from "@angular/common";
import { InfoGeneralService } from "src/app/services/infoGeneral.service";
import { AutenticacionService } from "src/app/services/autenticacion.service";
import { Observable } from "rxjs";
declare var $: any;

interface CountryOption {
  name: string;
  value: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  public registerForm: FormGroup;
  public mensajeError: any = '';
  

  constructor(
    router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: DelegadoService,
    private cliente:HttpClient,
    private autenticacionService: AutenticacionService,
    private serviceEquipo: EquipoService,
    private _location: Location
  ) {
    this.registerForm = formBuilder.group({});
    
  }

  ngOnInit(): void {

    /*this.autenticacionService.vistaLogIn().subscribe(error => { console.log('errores');
    if(error != null){
      this.mensajeError = error[0]
    }; console.log('errores'),
    console.log(error);
    if(error == null){
      $('#exampleModal').modal('show');
    };
    });
*/
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          ),
        ],
      ],
    });

    
  }

  // custom validator to check that two fields match
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  // convenience getter for easy access to form fields
  get form() {
    //return this.registerForm.controls;
    return this.loginForm.controls;
  }

  handleError(error){
    this.mensajeError = error.error.error;
  }

  onLogin(): void {
     //console.log('inicio de sesion correcta');
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      localStorage.setItem("user-data", JSON.stringify(this.loginForm.value));

      
      //donde te va a enviar si te logueas
      //this.router2.navigate(['vistadelegado/1']);
    }

    this.autenticacionService.iniciarSesion(this.loginForm.value).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );


    

    /*this.http.loginDelegado({...this.loginForm.value}).subscribe(
      //data => console.log(data),
      (error) => {
        if (error != null) {
          this.mensajeError = error[0];
        }
        console.log("errores"), console.log(error);

      }
    );*/
  }
  
 
  get nombreDelegado(): FormControl {
    return this.registerForm.get("nombreDelegado") as FormControl;
  }
  get correoDelegado(): FormControl {
    return this.registerForm.get("correoDelegado") as FormControl;
  }
  get nroComprobante(): FormControl {
    return this.registerForm.get("nroComprobante") as FormControl;
  }

  get apellidoDelegado(): FormControl {
    return this.registerForm.get("nombreDelegado") as FormControl;
  }
}
