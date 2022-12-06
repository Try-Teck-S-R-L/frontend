import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PreinscripcionService } from "src/app/services/preinscripcion.service";
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { PreinscripcionI } from "../models/preinscripcion.interface";
import {Location} from '@angular/common';

@Component({
  selector: 'app-informacion-pre-dele',
  templateUrl: './informacion-pre-dele.component.html',
  styleUrls: ['./informacion-pre-dele.component.css']
})
export class InformacionPreDeleComponent implements OnInit {
  public id: string = "";
  public preinscripcionActual = { "idPreinscripcion": '', "fechaPreinscripcion": '', "voucherPreinscripcion": "", "nombreEquipo": "", "habilitado": "", "paisEquipo": "", "montoPago": "", "nroComprobante": '', "idDelegado": "", "idCategoria": '',"correoDelegado": '',"nombreDelegado": '',"apellidoDelegado": '', "nombreCategoria": ''};
  //public preinscripcionActual: PreinscripcionI;
  public fotoMostrar= '';
  constructor(
    router: ActivatedRoute,
    private servicePreinscripcion: PreinscripcionService,
    private _location: Location,
    private sanitizer:DomSanitizer,
    private routerView:Router,
    private activatedRoute: ActivatedRoute
  ) {
    router.params.subscribe((params) => {
      this.id = params["id"];
    });
  }
  public formularioEquipo: any;

  ngOnInit(): void {
    this.servicePreinscripcion
      .getPreinscripcionGeneral(this.id)
      //.subscribe((res: any) => (this.preinscripcionActual = res, this.fotoMostrar = this.sanitizer.bypassSecurityTrustResourceUrl(res.fotoComprobante)));
      .subscribe((res: any) => (this.preinscripcionActual = res,

                                this.fotoMostrar.concat(this.preinscripcionActual.voucherPreinscripcion),
                                this.fotoMostrar += res.voucherPreinscripcion,
                                console.log(this.fotoMostrar),
                                console.log(res))
                                
      );
      //console.log(this.preinscripcionActual);

      //console.log(this.preinscripcionActual);
  }
  sanitizeURL(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
  //async fetchData(): void {}

  regresar(){
    this._location.back();
  }
  atras(){
    this._location.back();
  }
}
