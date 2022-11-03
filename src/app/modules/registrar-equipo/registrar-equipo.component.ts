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

import { EquipoService } from "src/app/services/equipo.service";
import data from "../../../assets/Archivos/data.json";
import { ResponseI } from "../models/response.interface";

import { ElementolistaService } from 'src/app/services/elementolista.service';
import { PreinscripcionService } from 'src/app/services/preinscripcion.service';

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
  public idDel: string = "";
  public listaPreinscripciones: any = [];

  constructor(
    router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http:EquipoService,
    private elemento: ElementolistaService, 
    private serviceEquipo: EquipoService,
    private preinscripcionService: PreinscripcionService
    //private router:Router) 
  ){
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

    this.preinscripcionService.preinscripcionesAceptadas(this.idDel).subscribe((data) => (this.listaPreinscripciones = data ))

    this.registerForm = this.formBuilder.group({
      nombreDelegado: ["", [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)]],
      nombreEquipo: ["", [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)]],
      categoria: ["", [Validators.required]],
      paisEquipo: ["", [Validators.required]],
      colorEquipo: ["", [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)]],
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

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.http
      .RegistrarEquipo({
        ...this.registerForm.value,
        logoEquipo: this.file,
      }, this.idDel)
      .subscribe((data: ResponseI) => {
        let response: ResponseI = data;
        console.log("File:", this.file);
        console.log({
          ...this.registerForm.value,
          logoEquipo: this.file,
        });
      });

    





    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    );
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
  get nombreDelegado(): FormControl {
    return this.registerForm.get("nombreDelegado") as FormControl;
  }
  get colorEquipo(): FormControl {
    return this.registerForm.get("colorEquipo") as FormControl;
  }
  get nombreEquipo(): FormControl {
    return this.registerForm.get("nombreEquipo") as FormControl;
  }
}
