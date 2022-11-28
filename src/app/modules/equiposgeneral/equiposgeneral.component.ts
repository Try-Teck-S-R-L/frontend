import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import {QRCodeComponent} from 'angular2-qrcode';
import { EquipoService } from 'src/app/services/equipo.service';
import { JugadorService } from 'src/app/services/jugador.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-equiposgeneral',
  templateUrl: './equiposgeneral.component.html',
  styleUrls: ['./equiposgeneral.component.css']
})
export class EquiposgeneralComponent implements OnInit {
  public credencial: FormGroup;
  public listaEquipos: any = [];
  public listaJugadores: any = [];
  public infoEquipo: any = '';

  public idEquipo:string = "";
  public urlActual: any;
  constructor(
    private jugadorService: JugadorService,
    private equipoService: EquipoService,
    router: ActivatedRoute) { 
      router.params.subscribe((params) => {
        this.idEquipo = params["id"];
      });
      
  }

  ngOnInit(): void {
    //this.jugadorService.getAllJugadores(this.idEquipo).subscribe(data => (this.listaJugadores = data, console.log(data)));
    this.equipoService.getAllEquiposTorneo().subscribe((data2: any) => (this.listaEquipos = data2));

  }
  get equipoJugador(){ return this.credencial.value.equipos; }

  
  
}
