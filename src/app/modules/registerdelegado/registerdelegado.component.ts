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
import { TokenService } from "src/app/services/token.service";
declare var $: any;

interface CountryOption {
  name: string;
  value: string;
}

@Component({
  selector: 'app-registerdelegado',
  templateUrl: './registerdelegado.component.html',
  styleUrls: ['./registerdelegado.component.css']
})
export class RegisterdelegadoComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  public registerForm: FormGroup;

  public paises: CountryOption[] = [];
  private idPhoto: File | null = null;
  private profilePhoto: File | null = null;
  public listaPaises: any = [];
  private file: File | null = null;
  public listaCategorias: any = [];
  public idDel: string = "";
  public mensajeError: string = "";
  public fechaValida: number;

  public form = {
    email: null,
    name: null,
   
    role: 'delegado',
    password: null,
    password_confirmation: null
  };
  public error = [];


  constructor(
    private tokenService: TokenService,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: DelegadoService,
    private elemento: ElementolistaService,
    private autenticacionService: AutenticacionService,
    private cliente:HttpClient,
    private generalService: InfoGeneralService,
    private delegadoService: DelegadoService,
    private serviceEquipo: EquipoService,
    private _location: Location
  ) {
    this.registerForm = formBuilder.group({});
    this.paises = data.paises;
  }
  ngOnInit() {
    this.elemento.getAllPaises().subscribe((data) => (this.listaPaises = data));

    this.registerForm = this.formBuilder.group({
      nombreDelegado: [
        "",
        [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)],
      ],
      apellidoDelegado: [
        "",
        [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)],
      ],
      nacionalidadDelegado: ["", [Validators.required]],
      correoDelegado: ["", [Validators.required, Validators.email]],
      
      ciDelegado: ["", [Validators.required]],
      
      edadDelegado: ["", [Validators.required]],
      
      fotoPerfilDelegado: ["", [Validators.required]],
      fotoCiDelegado: ["", [Validators.required]],
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

handleData(data){
  this.tokenService.handle(data.access_token),
  this.router.navigateByUrl('/vistadelegado');
}

handleError(error){
  this.mensajeError = error.error.error;
}

onSubmit() {
  this.submitted = true;

  this.mensajeError = "";

  console.log(this.form);

  this.autenticacionService.registrar(this.form).subscribe(
      data => {this.handleData(data),localStorage.setItem("is-delegado", "true"), this.router.navigate(['/vistadelegado'])},
      //error => this.handleError(error)
      error => console.log(error)
    );

    //this.router.navigate(['vistadelegado']);

  // stop here if form is invalid
  /*if (this.registerForm.invalid) {
    return;
  }*/

  /*this.http
    .registrarDelegado({
      ...this.registerForm.value,
      fotoPerfilDelegado: this.profilePhoto,
      fotoCiDelegado: this.idPhoto,
    })
    //.getAllJugadores(this.idEquipo)

    .subscribe(
      //data => console.log(data),
      (error) => {
        if (error != null) {
          this.mensajeError = error[0];
        }
        console.log("errores"), console.log(error);
        if (error == null) {
          $("#exampleModal").modal("show");
        }
      }
    );*/
  //this._location.back();
  //this.routerView.navigate(['equiposmenu/'+this.idEquipo], { skipLocationChange: true });
  //this.routerView.navigate(['equiposmenu/'+this.idEquipo], { replaceUrl: true });
  //this.routerView.navigate([this._location.back()], { replaceUrl: true });
}
onFileSelected(event: any, fileType: "ID" | "PROFILE") {
  const file: File = event.target.files[0];

  if (file) {
    switch (fileType) {
      case "ID":
        this.idPhoto = file;
        break;
      case "PROFILE":
        this.profilePhoto = file;
        break;
    }
  }
}
get nombreDelegado(): FormControl {
  return this.registerForm.get("nombreDelegado") as FormControl;
}
get correoDelegado(): FormControl {
  return this.registerForm.get("correoDelegado") as FormControl;
}


get apellidoDelegado(): FormControl {
  return this.registerForm.get("nombreDelegado") as FormControl;
}
}

