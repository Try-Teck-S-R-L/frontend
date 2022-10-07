import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Router } from "@angular/router";
import { JugadorService } from "src/app/services/jugador.service";
import data from "../../../assets/Archivos/data.json";
import { ResponseI } from "../models/response.interface";

interface CountryOption {
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
  private file: File | null = null;

  @HostListener("change", ["$event.target.files"]) emitFiles(event: FileList) {
    const file = event && event.item(0);
    // usar esta variable en el momento de enviar el fomulario
    if (file) {
      this.file = file;
    }
  }

  constructor(private formBuilder: FormBuilder,
    private http: JugadorService, private router: Router) {

    this.registerForm = formBuilder.group({});
    this.paises = data.paises;
  }

  ngOnInit() {

    this.http.getAllJugadores().subscribe(data => console.log(data));
    //this.http.get<any>
    //console.log(this.http.getAllJugadores().subscribe);
    this.registerForm = this.formBuilder.group({

      nombreJugador: ["", [Validators.required]],
      apellidoJugador: ["", [Validators.required]],
      
      
      categoria: ["", [Validators.required]],
      nacionalidadJugador: ["", [Validators.required]],
      tallaJugador: ["", [Validators.required]],
      posicionJugador: ["", [Validators.required]],
      fotoPerfilJugador: [null, [Validators.required]],
      numeroCamiseta: ["", [Validators.required]],
      fotoCiJugador: [null, [Validators.required]],
      edadJugador: ["", [Validators.required]],
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

    this.http.Jugador(this.registerForm.value).subscribe(data => {
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
