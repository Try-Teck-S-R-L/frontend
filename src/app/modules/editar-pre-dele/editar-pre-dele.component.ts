
import { DelegadoService } from "src/app/services/delegado.service";
import { ElementolistaService } from "src/app/services/elementolista.service";
import { EquipoService } from "src/app/services/equipo.service";

import data from "../../../assets/Archivos/data.json";
import { DelegadoI } from "../models/delegado.interface";
import { PreinscripcionI } from "../models/preinscripcion.interface";
import { ResponseI } from "../models/response.interface";
import {Location} from '@angular/common';



import { ActivatedRoute } from '@angular/router';
import { InfoGeneralService } from 'src/app/services/infoGeneral.service';
import { PreinscripcionService } from 'src/app/services/preinscripcion.service';
import { error } from "@angular/compiler/src/util";
import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

interface CountryOption {
  name: string;
  value: string;
}

declare var $: any;


@Component({
  selector: 'app-editar-pre-dele',
  templateUrl: './editar-pre-dele.component.html',
  styleUrls: ['./editar-pre-dele.component.css']
})
export class EditarPreDeleComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  public paises: CountryOption[] = [];
  private file: File | null = null;
  public listaEquipos: any = [];
  public listaPaises: any = [];
  public listaCategorias: any = [];
  public mensajeError: string = '';
  public fotoMostrar= '';
  
  public delegadoAct: { "nombreDelegado": "string";"apellidoDelegado" : "string" ;"correoDelegado": "string" } | undefined;


  public idPreinscripcion: string = "";
  public datosPreinscripcion: any = [];
  public fechaValida: number;

  constructor(
    
    private formBuilder: FormBuilder,
    private http: PreinscripcionService,
    private elemento: ElementolistaService,
   
    private delegadoService: DelegadoService,
    private serviceEquipo: EquipoService,
    private _location: Location,
    
    router: ActivatedRoute,

    private generalService: InfoGeneralService,
    private servicePreinscripcion: PreinscripcionService) {
      router.params.subscribe((params) => {
        this.idPreinscripcion = params["id"];
        this.paises = data.paises;
      });
    }

  ngOnInit(): void {

    this.generalService.verificarFechaValida().subscribe(data => {this.fechaValida = data;
    });

    this.servicePreinscripcion.getPreinscripcionGeneral(this.idPreinscripcion)
    .subscribe((res : any)=>{this.datosPreinscripcion = res,this.fotoMostrar += res.voucherPreinscripcion, console.log(res)});
    

    this.elemento
    .getAllCategorias()
    .subscribe((data) => (this.listaCategorias = data));

    this.elemento.getAllPaises().subscribe((data) => (this.listaPaises = data));

  /*this.serviceEquipo
    .getAllEquipos()
    .subscribe((res: any) => (this.listaEquipos = res));*/

    this.delegadoService.getInfoDelegado(this.datosPreinscripcion.idDelegado).subscribe((data) => (this.delegadoAct =  data));

  this.registerForm = this.formBuilder.group({
    nombreDelegado: [],
    emailDelegado: [],
    nombreEquipo: [],
    paisEquipo: ["", [Validators.required]],

    idCategoria: ["", [Validators.required]],
    
    nroComprobante: ["", [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)]],
    montoPago: ["350", [Validators.required]],
    fechaPreinscripcion: ["2022-08-01", [Validators.required]],
  });


  }




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
      .EditarPreinscripcion({
        ...this.registerForm.value,
        voucherPreinscripcion: this.file
      }, this.idPreinscripcion)
      
      /*.subscribe((data) => {
        let response: ResponseI = data;
        console.log("File:", this.file);
        console.log({
          ...this.registerForm.value,
          voucherPreinscripcion: this.file,
        });
      });*/
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


  /*onselectFile(e){
    this.fotoMostrar ='0;'
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.fotoMostrar = event.target.result;
      }
    }

  }*/


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
    $('#exampleModal').modal('hide');
    this.onReset();
    this._location.back();
  }

 atras(){
    this._location.back();
  }
}
