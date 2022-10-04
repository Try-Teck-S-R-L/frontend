
import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import data from "../../../assets/Archivos/data.json";

interface CountryOption {
  name: string;
  value: string;
}

@Component({
  selector: 'app-inscripcion-jugador',
  templateUrl: './inscripcion-jugador.component.html',
  styleUrls: ['./inscripcion-jugador.component.css']
})
export class InscripcionJugadorComponent implements OnInit {
  registrojugador: FormGroup;
  submitted = false;
  public paisEquipo: CountryOption[] = [];
  private file: File | null = null;

  @HostListener("change", ["$event.target.files"]) emitFiles(event: FileList) {
    const file = event && event.item(0);
    // usar esta variable en el momento de enviar el fomulario
    if (file) {
      this.file = file;
    }
  }

  constructor(private formBuilder: FormBuilder) {
    this.registrojugador = formBuilder.group({});
    this.paisEquipo = data.paises;
  }

  ngOnInit() {
    this.registrojugador = this.formBuilder.group({
      categorias: ["", [Validators.required]],
      nombres: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      paisEquipo: ["", [Validators.required]],
      talla: ["", [Validators.required]],
      camiseta: ["", [Validators.required]],
      edad: ["", [Validators.required]],
      posicion: ["", [Validators.required]],
      foto: [null, [Validators.required]],
      imagen: [null, [Validators.required]],
      
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
    return this.registrojugador.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrojugador.invalid) {
      return;
    }

    console.log({ ...this.registrojugador.value, imagen: this.file });

    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registrojugador.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.registrojugador.reset();
  }
}
