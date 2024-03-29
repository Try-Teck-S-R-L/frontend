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
import {Location} from '@angular/common';
import { InfoGeneralService } from "src/app/services/infoGeneral.service";
import { TokenService } from "src/app/services/token.service";


declare var $: any;

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
  public mensajeError: string = '';
  public fechaValida: number;
  public delegadoAct: { "nombreDelegado": "string";"apellidoDelegado" : "string" ;"correoDelegado": "string" } | undefined;

  constructor(
    router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: PreinscripcionService,
    private elemento: ElementolistaService,
    private generalService: InfoGeneralService,
    private delegadoService: DelegadoService,
    private tokenService: TokenService,
    private _location: Location
    //private router: Router
  ) {
    this.registerForm = formBuilder.group({});
    this.paises = data.paises;
    router.params.subscribe((params) => {
    });
  }

  ngOnInit() {
    //$('#exampleModal').modal('show');

    this.idDel = this.tokenService.getDelegadoId();
    this.generalService.verificarFechaValida().subscribe(data => {this.fechaValida = data;
      });


    this.elemento
      .getAllCategorias()
      .subscribe((data) => (this.listaCategorias = data));

    this.elemento.getAllPaises().subscribe((data) => (this.listaPaises = data));

    /*this.serviceEquipo
      .getAllEquipos()
      .subscribe((res: any) => (this.listaEquipos = res));*/

      console.log(this.idDel);
    this.delegadoService.getInfoDelegado(this.idDel).subscribe((data) => (this.delegadoAct =  data));

    this.registerForm = this.formBuilder.group({
      nombreDelegado: [],
      emailDelegado: [],
      nombreEquipo: ["", [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)]],
      paisEquipo: ["", [Validators.required]],

      idCategoria: ["", [Validators.required]],
      
      nroComprobante: ["", [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)]],
      montoPago: ["350", [Validators.required]],
      fechaPreinscripcion: ["2022-08-01", [Validators.required]],
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
    this.submitted = true;
    this.mensajeError = '';

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;


    }

    



    this.http
      .Preinscripcion({
        ...this.registerForm.value,
        voucherPreinscripcion: this.file
      }, this.idDel)
      
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


  regresar(){
    this.onReset();
    this._location.back();
  }
atras(){
  this._location.back();
}
}