import { EquipoService } from 'src/app/services/equipo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { EquipoI } from '../models/equipo.interface';
import { JugadorService } from 'src/app/services/jugador.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-info-equipo-general',
  templateUrl: './info-equipo-general.component.html',
  styleUrls: ['./info-equipo-general.component.css']
})
export class InfoEquipoGeneralComponent implements OnInit {
  public idEquipo: string = "";
  //public equipoActual = { "idEquipo": '', "nombreEquipo": '', "paisEquipo": "", "logoEquipo": "", "colorCamisetaPrincipal": "", "colorCamisetaSecundario": "","nombreCategoria":""};
  public equipoActual: any = '';
  public listaJugadores: any = '';
  //public preinscripcionActual: PreinscripcionI;
  public fotoMostrar= '';

  constructor(
    router: ActivatedRoute,
    private serviceEquipo: EquipoService,
    private _location: Location,
    private serviceJugador: JugadorService,
    private sanitizer:DomSanitizer
  ) {
    router.params.subscribe((params) => {
      this.idEquipo = params["id"];
    });
  }

  ngOnInit(): void {
    this.serviceEquipo
      //.getAllEquipos(this.id)
      .getEquipoXid(this.idEquipo)
      //.subscribe((res: any) => (this.preinscripcionActual = res, this.fotoMostrar = this.sanitizer.bypassSecurityTrustResourceUrl(res.fotoComprobante)));
      .subscribe((res: any) => (this.equipoActual = res,

                                this.fotoMostrar.concat(this.equipoActual.logoEquipo),
                                this.fotoMostrar += res.logoEquipo,
                                console.log(this.fotoMostrar),
                                console.log(res))
                                
      );

      this.serviceJugador.getAllJugadores(this.idEquipo).subscribe((res : any)=>this.listaJugadores = res);
    
      //console.log(this.preinscripcionActual);

      //console.log(this.preinscripcionActual);
  }
  sanitizeURL(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
atras(){
  this._location.back();
}
}
