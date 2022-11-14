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
import { DelegadoI } from "../models/delegado.interface";
import { PreinscripcionI } from "../models/preinscripcion.interface";
import { ResponseI } from "../models/response.interface";
import {Location} from '@angular/common';




interface CountryOption {
  name: string;
  value: string;
}

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.css"],
})
export class ReactiveFormsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  public paises: CountryOption[] = [];
  private file: File | null = null;
  public listaEquipos: any = [];
  public listaPaises: any = [];
  public listaCategorias: any = [];
  public idDel: string = "";
  public mensajeError: any = [];
  public delegadoAct: { "nombreDelegado": "string";"correoDelegado": "string" } | undefined;
  //public delegado = {"nombreDelegado" : '' , "apellidoDelegado" : '', "correoDelegado" : ''};

  constructor(
    router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: PreinscripcionService,
    private elemento: ElementolistaService,
    private delegadoService: DelegadoService,
    private serviceEquipo: EquipoService,
    private _location: Location
    //private router: Router
  ) {
    this.registerForm = formBuilder.group({});
    this.paises = data.paises;
    router.params.subscribe((params) => {
      this.idDel = params["id"];
    });
  }

  ngOnInit() {
    this.elemento
      .getAllCategorias()
      .subscribe((data) => (this.listaCategorias = data));

    this.elemento.getAllPaises().subscribe((data) => (this.listaPaises = data));

    /*this.serviceEquipo
      .getAllEquipos()
      .subscribe((res: any) => (this.listaEquipos = res));*/

    this.delegadoService.getInfoDelegado(this.idDel).subscribe((data) => (this.delegadoAct =  data));

    this.registerForm = this.formBuilder.group({
      nombreDelegado: [],
      emailDelegado: [],
      nombreEquipo: ["", [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)]],
      paisEquipo: ["", [Validators.required]],

      idCategoria: ["", [Validators.required]],
      
      nroComprobante: ["", [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)]],
      montoPago: ["50", [Validators.required]],
      fechaPreinscripcion: ["2023-01-01", [Validators.required]],
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
  }

  onSubmit() {

    
    if (this.registerForm.valid) {
      console.log("Form Submitted!");
      
      alert(
        "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
      );



      this._location.back();
    }
    
    
    

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;

    }





    this.http
      .Preinscripcion({
        ...this.registerForm.value,
        voucherPreinscripcion: this.file
      }, this.idDel)
      
      /*.subscribe((data) => {
        let response: ResponseI = data;
        console.log("File:", this.file);
        console.log({
          ...this.registerForm.value,
          voucherPreinscripcion: this.file,
        });
      });*/
      .subscribe(data => console.log(data),
                 error => this.mensajeError = error);

    // display form values on success
    
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.registerForm.clearValidators();
    this.registerForm.updateValueAndValidity();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.file = file;
    }
  }

  get nombreDelegado(): FormControl {
    return this.registerForm.get("nombreDelegado") as FormControl;
  }
  get nombreEquipo(): FormControl {
    return this.registerForm.get("nombreEquipo") as FormControl;
  }
  get nroComprobante(): FormControl {
    return this.registerForm.get("nroComprobante") as FormControl;
  }



}
