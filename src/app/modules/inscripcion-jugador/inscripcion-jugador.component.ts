import { JugadorI } from "./../models/jugador.interface";
import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import {Location} from '@angular/common';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ElementolistaService } from "src/app/services/elementolista.service";
import { EquipoService } from "src/app/services/equipo.service";
import { JugadorService } from "src/app/services/jugador.service";
import data from "../../../assets/Archivos/data.json";
import { ResponseI } from "../models/response.interface";
import { InfoGeneralService } from "src/app/services/infoGeneral.service";

declare var $: any;

export interface CountryOption {
  name: string;
  value: string;
}

@Component({
  selector: "app-inscripcion-jugador",
  templateUrl: "./inscripcion-jugador.component.html",
  styleUrls: ["./inscripcion-jugador.component.css"],
})
export class InscripcionJugadorComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  public paises: CountryOption[] = [];
  private idPhoto: File | null = null;
  private profilePhoto: File | null = null;
  public idEquipo: string = '';
  public fechaValida: number;
  public listaTallas: any = [];
  public listaPaises: any = [];
  public listaCategorias: any = [];
  public listaPosiciones: any = [];
  public mensajeError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: JugadorService,
    private elemento: ElementolistaService,
    private router: ActivatedRoute,
    private generalService: InfoGeneralService,
    private routerView: Router,
    private activatedRoute: ActivatedRoute,
    private _location: Location
  ) {
    this.registerForm = formBuilder.group({});
    this.paises = data.paises;
    router.params.subscribe((params) => {
      this.idEquipo = params["id"];
    });
  }

  ngOnInit() {

    this.generalService.verificarFechaValida().subscribe(data => {this.fechaValida = data;
    });

    this.registerForm = this.formBuilder.group({
      nombreJugador: [
        "",
        [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)],
      ],
      apellidoJugador: [
        "",
        [Validators.required, Validators.pattern(/^(\w+\s)*\w+$/)],
      ],
      //categoria: ["", [Validators.required]],
      nacionalidadJugador: ["", [Validators.required]],
      tallaJugador: ["", [Validators.required]],
      posicionJugador: ["", [Validators.required]],
      numeroCamiseta: ["", [Validators.required, ]],
      edadJugador: ["35", [Validators.required]],
      ciJugador: ["", [Validators.required]],
      fotoPerfilJugador:["", [Validators.required]],
      fotoCiJugador:["", [Validators.required]],
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
    /*if (this.registerForm.invalid) {
      return;
    }*/

    this.http
      .jugador({
        ...this.registerForm.value,
        fotoPerfilJugador: this.profilePhoto,
        fotoCiJugador: this.idPhoto,
      }, this.idEquipo)
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

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.registerForm.clearValidators();
    this.registerForm.updateValueAndValidity();
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

  get nombreJugador(): FormControl {
    return this.registerForm.get("nombreJugador") as FormControl;
  }
  get apellidoJugador(): FormControl {
    return this.registerForm.get("apellidoJugador") as FormControl;
  }

  regresar(){
    $('#exampleModal').modal('hide');
    this.onReset();
    window.location.reload();


    //this._location.back();
  }
  atras(){
    this._location.back();
  }

}