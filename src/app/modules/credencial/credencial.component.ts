import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {QRCodeComponent} from 'angular2-qrcode';

@Component({
  selector: 'app-credencial',
  templateUrl: './credencial.component.html',
  styleUrls: ['./credencial.component.css']
})
export class CredencialComponent implements OnInit {
  public credencial: FormGroup;
  listaJugadores: any = [];

  public urlActual: any;
  constructor() { 
    this.urlActual = window.location.href;
    console.log(this.urlActual);
    this.credencial = new FormGroup({
      equipos: new FormControl('',
        Validators.required)
    });
  }

  ngOnInit(): void {
  }
  get equipoJugador(){ return this.credencial.value.equipos; }
}
