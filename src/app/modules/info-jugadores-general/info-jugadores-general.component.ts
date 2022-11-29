import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PreinscripcionService } from "src/app/services/preinscripcion.service";
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { PreinscripcionI } from "../models/preinscripcion.interface";
import {Location} from '@angular/common';
import { JugadorService } from "src/app/services/jugador.service";
import { JugadorI } from "../models/jugador.interface";


@Component({
  selector: 'app-info-jugadores-general',
  templateUrl: './info-jugadores-general.component.html',
  styleUrls: ['./info-jugadores-general.component.css']
})
export class InfoJugadoresGeneralComponent implements OnInit {
  public idJugador: string = "";
  private fechaValida: boolean;
  public infoJugador: any;

  constructor(
    router: ActivatedRoute,
    private servicePreinscripcion: PreinscripcionService,
    private _location: Location,
    private sanitizer:DomSanitizer,
    private serviceJugador: JugadorService,
    private routerView:Router,
    private activatedRoute: ActivatedRoute
  ) {
    router.params.subscribe((params) => {
      this.idJugador = params["id"];
    });
  }
  

  ngOnInit(): void {
    this.serviceJugador
      .getJugador(this.idJugador)
      .subscribe((res: any) => (this.infoJugador = res, console.log(res) ));
  }
}
