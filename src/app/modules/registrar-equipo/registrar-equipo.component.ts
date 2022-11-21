
import { EquipoI } from './../models/equipo.interface';

import { HostListener } from "@angular/core";
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";


import data from "../../../assets/Archivos/data.json";
import { ResponseI } from "../models/response.interface";

import { ElementolistaService } from 'src/app/services/elementolista.service';
import { EquipoService } from "src/app/services/equipo.service";
import { PreinscripcionService } from "src/app/services/preinscripcion.service";
import { DelegadoService } from "src/app/services/delegado.service";
import {Location} from '@angular/common';
import { InfoGeneralService } from 'src/app/services/infoGeneral.service';

declare var $: any;


interface CountryOption {
  name: string;
  value: string;
}

@Component({
  selector: 'app-registrar-equipo',
  templateUrl: './registrar-equipo.component.html',
  styleUrls: ['./registrar-equipo.component.css']
})
export class RegistrarEquipoComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  public paises: CountryOption[] = [];
  private file: File | null = null;
  public listaEquipos: any = [];
  public listaPaises: any = [];
  public listaCategorias: any = []; 
  public idPreinscripcion: string = "";
  public preinscripcionAprob: any = '';
  public mensajeError: string = '';
  public fechaValida: number;

  
  constructor(
    router: ActivatedRoute,
    private routerView: Router,
    private formBuilder: FormBuilder,
    private http:EquipoService,
    private elemento: ElementolistaService, 
    private serviceEquipo: EquipoService,
    private generalService: InfoGeneralService,
    private _location: Location,
    private preinscripcionService: PreinscripcionService,
    
    private location: Location
    //private router:Router) 
  ){
      this.registerForm = formBuilder.group({});
      this.paises = data.paises;
      router.params.subscribe((params) => {
        this.idPreinscripcion = params["id"];
      });
    }
  

  ngOnInit() {


    this.generalService.verificarFechaValida().subscribe(data => {this.fechaValida = data;
    });
    
    this.elemento
    .getAllCategorias()
    .subscribe((data) => (this.listaCategorias = data));
    

    this.elemento.getAllPaises().subscribe((data) => (this.listaPaises = data));
    /*this.serviceEquipo
    .getAllEquipos()
    .subscribe((res: any) => (this.listaEquipos = res));*/

    this.preinscripcionService.getDatosPreinscripcionAprobada(this.idPreinscripcion)
    .subscribe((data) => {
      if(data != null){
        this.preinscripcionAprob = data ;
      };
      if(data == null){
        this.routerView.navigate(['vistaerror/Este equipo ya fue inscrito'], { skipLocationChange: true });
    
      }
        })

    this.registerForm = this.formBuilder.group({
      
      
      colorCamisetaPrincipal: ["", [Validators.required]],
      colorCamisetaSecundario: ["", [Validators.required]],
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


    if (this.registerForm.valid) {
      console.log("Form Submitted!");

      //this.location.back();
      
    }

    
    this.submitted = true;
    this.mensajeError = '';

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;

    }

    this.http
      .RegistrarEquipo({
        ...this.registerForm.value,
        logoEquipo: this.file,
        idPreinscripcion: this.idPreinscripcion
      }, this.idPreinscripcion)
      .subscribe(error => {
        if(error != null){
          this.mensajeError = error[0]
        };
        if(error == null){
          $('#exampleModal').modal('show');
        }; console.log(error)});

    





    // display form values on success
    
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.file = file;
    }
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.registerForm.clearValidators();
    this.registerForm.updateValueAndValidity();
  }

  regresar(){
    $('#exampleModal').modal('hide');
    this.routerView.navigate(['vistaerror/Este equipo ya fue registrado correctamente'], { skipLocationChange: true });
    this.onReset();
    this._location.back();
  }
  

  
 
}
