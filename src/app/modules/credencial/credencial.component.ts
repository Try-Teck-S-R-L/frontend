import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {QRCodeComponent} from 'angular2-qrcode';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-credencial',
  templateUrl: './credencial.component.html',
  styleUrls: ['./credencial.component.css']
})
export class CredencialComponent implements OnInit {
  public credencial: FormGroup;
  listaJugadores: any = [];

  public urlActual: any;
  constructor(private http: JugadorService) { 
    this.urlActual = window.location.href;
    console.log(this.urlActual);
    this.credencial = new FormGroup({
      equipos: new FormControl('',
        Validators.required)
    });
  }

  ngOnInit(): void {
    this.http.getAllJugadores().subscribe(data => (this.listaJugadores = data, console.log(data)));
  }
  get equipoJugador(){ return this.credencial.value.equipos; }
}
