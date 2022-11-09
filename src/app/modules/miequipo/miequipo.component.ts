import { EquipoService } from 'src/app/services/equipo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { EquipoI } from '../models/equipo.interface';

@Component({
  selector: 'app-miequipo',
  templateUrl: './miequipo.component.html',
  styleUrls: ['./miequipo.component.css']
})
export class MiequipoComponent implements OnInit {
  public idEquipo: string = "";
  //public equipoActual = { "idEquipo": '', "nombreEquipo": '', "paisEquipo": "", "logoEquipo": "", "colorCamisetaPrincipal": "", "colorCamisetaSecundario": "","nombreCategoria":""};
  public equipoActual: any = '';
  //public preinscripcionActual: PreinscripcionI;
  public fotoMostrar= 'http://127.0.0.1:8000/';
  constructor(
    router: ActivatedRoute,
    private serviceEquipo: EquipoService,
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
      //console.log(this.preinscripcionActual);

      //console.log(this.preinscripcionActual);
  }
  sanitizeURL(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

}
