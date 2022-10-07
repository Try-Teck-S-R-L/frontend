import { HostListener } from "@angular/core";
import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Router } from "@angular/router";
import { EquipoService } from "src/app/services/equipo.service";
import data from "../../../assets/Archivos/data.json";
import { ResponseI } from "../models/response.interface";

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

  @HostListener("change", ["$event.target.files"]) emitFiles(event: FileList) {
    const file = event && event.item(0);
    // usar esta variable en el momento de enviar el fomulario
    if (file) {
      this.file = file;
    }
  }

  constructor(private formBuilder: FormBuilder,
    private http:EquipoService,
    private router:Router) {
    this.registerForm = formBuilder.group({});
    this.paises = data.paises;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombreDelegado: ["", [Validators.required]],
      nombreEquipo: ["", [Validators.required]],
      categoria: ["", [Validators.required]],
      paisEquipo: ["", [Validators.required]],
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

    this.http.Equipo(this.registerForm.value).subscribe(data => {
      let response:ResponseI = data
      console.log({ ...this.registerForm.value, imagen: this.file });
    })

    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
