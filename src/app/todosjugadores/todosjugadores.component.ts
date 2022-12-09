import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import {QRCodeComponent} from 'angular2-qrcode';
import { EquipoService } from 'src/app/services/equipo.service';
import { JugadorService } from 'src/app/services/jugador.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Location} from '@angular/common';


@Component({
  selector: 'app-todosjugadores',
  templateUrl: './todosjugadores.component.html',
  styleUrls: ['./todosjugadores.component.css']
})
export class TodosjugadoresComponent implements OnInit {

  public credencial: FormGroup;
  public listaJugadores: any = [];

  public urlActual: any;
  constructor(
    private jugadorService: JugadorService,
    private _location: Location,
    private equipoService: EquipoService,
    router: ActivatedRoute) { 
      router.params.subscribe((params) => {
      });
      this.urlActual = window.location.href;
      console.log(this.urlActual);
      this.credencial = new FormGroup({
        equipos: new FormControl('',
          Validators.required)
      });
  }

  ngOnInit(): void {
    this.jugadorService.getJugadoresTorneo().subscribe(data => (this.listaJugadores = data, console.log(data)));

  }
  get equipoJugador(){ return this.credencial.value.equipos; }


  atras(){
    this._location.back();
  }

}
