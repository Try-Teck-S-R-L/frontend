import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PreinscripcionService } from "src/app/services/preinscripcion.service";
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { PreinscripcionI } from "../models/preinscripcion.interface";
import {Location} from '@angular/common';
import { SolicitudDelService } from "src/app/services/solicitudDel.service";

@Component({
  selector: 'app-evaluar-solicitud',
  templateUrl: './evaluar-solicitud.component.html',
  styleUrls: ['./evaluar-solicitud.component.css']
})
export class EvaluarSolicitudComponent implements OnInit {
  public id: string = "";
  //public preinscripcionActual = { "idPreinscripcion": '', "fechaPreinscripcion": '', "voucherPreinscripcion": "", "nombreEquipo": "", "habilitado": "", "paisEquipo": "", "montoPago": "", "nroComprobante": '', "idDelegado": "", "idCategoria": '',"correoDelegado": '',"nombreDelegado": '',"apellidoDelegado": '', "nombreCategoria": ''};
  solicitudActual: any = '';
  //public preinscripcionActual: PreinscripcionI;
  public fotoMostrar= '';
  

  constructor(
    router: ActivatedRoute,
    private servicePreinscripcion: PreinscripcionService,
    private _location: Location,
    private sanitizer:DomSanitizer,
    private routerView:Router,
    private solicitudService: SolicitudDelService,
    private activatedRoute: ActivatedRoute
  ) {
    router.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  public formularioEquipo: any;

  ngOnInit(): void {
    /*this.servicePreinscripcion
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
        });*/

        this.solicitudService
        .getSolicitud(this.id)
        //.subscribe((res: any) => (this.preinscripcionActual = res, this.fotoMostrar = this.sanitizer.bypassSecurityTrustResourceUrl(res.fotoComprobante)));
        .subscribe((res: any) => 
          {console.log(res);
          if(res != null){
            this.solicitudActual = res;     
          }
          if(res == null){
            this.routerView.navigate(['vistaerror/Esta solicitud ya fue evaluada'], { skipLocationChange: true });
      
          }
          });    
  }

  rechazarSolicitud($id: string) {

    this.solicitudService.rechazarSolicitud(this.id)
    .subscribe((res: any) => {
      console.log(res)
    }
    );
    this.regresar();
  }

  aceptarSolicitud($id: string) {
    console.log($id);
    this.solicitudService
      .aprobarSolicitud(this.id)
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
