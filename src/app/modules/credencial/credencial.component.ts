import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import {QRCodeComponent} from 'angular2-qrcode';
import { EquipoService } from 'src/app/services/equipo.service';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-credencial',
  templateUrl: './credencial.component.html',
  styleUrls: ['./credencial.component.css']
})
export class CredencialComponent implements OnInit {
  public credencial: FormGroup;
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
      this.urlActual = window.location.href;
      console.log(this.urlActual);
      this.credencial = new FormGroup({
        equipos: new FormControl('',
          Validators.required)
      });
  }

  ngOnInit(): void {
    this.jugadorService.getAllJugadores(this.idEquipo).subscribe(data => (this.listaJugadores = data, console.log(data)));
    this.equipoService.getEquipoXid(this.idEquipo).subscribe((data2: any) => (this.infoEquipo = data2));

  }
  get equipoJugador(){ return this.credencial.value.equipos; }
}
