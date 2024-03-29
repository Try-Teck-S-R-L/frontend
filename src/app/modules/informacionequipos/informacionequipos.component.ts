import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PreinscripcionService } from "src/app/services/preinscripcion.service";
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { PreinscripcionI } from "../models/preinscripcion.interface";
import {Location} from '@angular/common';

@Component({
  selector: "app-informacionequipos",
  templateUrl: "./informacionequipos.component.html",
  styleUrls: ["./informacionequipos.component.css"],
})
export class InformacionequiposComponent implements OnInit {
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
      .getPreinscripcionBuscada(this.id)
      //.subscribe((res: any) => (this.preinscripcionActual = res, this.fotoMostrar = this.sanitizer.bypassSecurityTrustResourceUrl(res.fotoComprobante)));
      .subscribe((res: any) => 
        {console.log(res);
        if(res != null){
          this.preinscripcionActual = res;
                                this.fotoMostrar.concat(this.preinscripcionActual.voucherPreinscripcion);
                                this.fotoMostrar += res.voucherPreinscripcion;
                                console.log(this.fotoMostrar);        
        }
        if(res == null){
          this.routerView.navigate(['vistaerror/Esta preinscripcion ya fue evaluada'], { skipLocationChange: true });
    
        }
        });
      //console.log(this.preinscripcionActual);

      //console.log(this.preinscripcionActual);
  }

  rechazarPreinscripcion($id: string) {
    this.servicePreinscripcion.rechazarPreinsc(this.id)
    .subscribe((res: any) => {
      console.log(res), this.routerView.navigate(['../'], {relativeTo: this.activatedRoute})
    }
    );
    this.regresar();
  }

  aceptarPreinscripcion($id: string) {
    console.log($id);
    this.servicePreinscripcion
      .aceptarPreinsc(this.id)
      .subscribe((res: any) => console.log(res));
      this.regresar();
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
