import { DelegadoI } from './../models/delegado.interface';
import { error } from "@angular/compiler/src/util";
import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
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
import {Location} from '@angular/common';
import { InfoGeneralService } from "src/app/services/infoGeneral.service";
declare var $: any;

interface CountryOption {
  name: string;
  value: string;
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  registerForm: FormGroup;
  
  public paises: CountryOption[] = [];
  private idPhoto: File | null = null;
  private profilePhoto: File | null = null;
  public listaPaises: any = [];
  private file: File | null = null;
  public listaCategorias: any = [];
  public idDel: string = "";
  public mensajeError: string = '';
  public fechaValida: number;
  constructor(router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: DelegadoService,
    private elemento: ElementolistaService,
    private generalService: InfoGeneralService,
    private delegadoService: DelegadoService,
    private serviceEquipo: EquipoService,
    private _location: Location)
    {this.registerForm = formBuilder.group({});
    this.paises = data.paises;
   }

  ngOnInit(): void {



    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          )
        ]
      ]
    });



    this.elemento.getAllPaises().subscribe((data) => (this.listaPaises = data));
    
    this.registerForm = this.formBuilder.group({
      
      nombreDelegado: ["", [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)]],
      apellidoDelegado: ["", [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)]],
      nacionalidadDelegado: ["", [Validators.required]],
      correoDelegado: ["", [Validators.required, Validators.email]],
      idCategoria: ["", [Validators.required]],
      ciJugador: ["", [Validators.required]],
      nroComprobante: ["", [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)]],
      edad: ["", [Validators.required]],
      fechaPreinscripcion: ["2022-08-01", [Validators.required]],
      fotoPerfilDelegado:["", [Validators.required]],
      fotoCiDelegado:["", [Validators.required]],
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
    return this.registerForm.controls;
    return this.loginForm.controls;
  }
  onLogin(): void {
    // console.log(this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      localStorage.setItem("user-Data", JSON.stringify(this.loginForm.value));
      //donde te va a enviar si te logueas
      //this.router.navigate(["/"]);
    }
  }
  onSubmit() {
    this.submitted = true;
    
    this.mensajeError = '';


    // stop here if form is invalid
    /*if (this.registerForm.invalid) {
      return;
    }*/

    this.http
      .registrarDelegado({
        ...this.registerForm.value,
        fotoPerfilDelegado: this.profilePhoto,
        fotoCiDelegado: this.idPhoto,
      },)
      //.getAllJugadores(this.idEquipo)

      .subscribe(//data => console.log(data),
                 error => {
                  if(error != null){
                    this.mensajeError = error[0]
                  }; console.log('errores'),
                  console.log(error);
                  if(error == null){
                    $('#exampleModal').modal('show');
                  };
                });
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
  get nroComprobante(): FormControl {
    return this.registerForm.get("nroComprobante") as FormControl;
  }
  
  get apellidoDelegado(): FormControl {
    return this.registerForm.get("nombreDelegado") as FormControl;
  }
  

}
