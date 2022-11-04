import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PreinscripcionService } from "src/app/services/preinscripcion.service";
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: "app-informacionequipos",
  templateUrl: "./informacionequipos.component.html",
  styleUrls: ["./informacionequipos.component.css"],
})
export class InformacionequiposComponent implements OnInit {
  public id: string = "";
  public preinscripcionActual = { "idPreinscripcion": '', "habilitado": '', "nombreDelegado": "", "email": "", "nombreEquipo": "", "pais": "", "numeroComprobante": "", "montoPago": '', "fechaPreinscripcion": "", "idDelegado": '', "idCategoria": '', "fotoComprobante": '' };
  public fotoMostrar= 'http://127.0.0.1:8000/fotosPerfiles/cheems-694624560_1667181351.jpg';
  

  constructor(
    router: ActivatedRoute,
    private servicePreinscripcion: PreinscripcionService,
    private sanitizer:DomSanitizer
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
      .subscribe((res: any) => (this.preinscripcionActual = res,

                                console.log('esta es ',this.fotoMostrar))
                                
      );


      //console.log(this.preinscripcionActual);
  }

  rechazarPreinscripcion($id: string) {
    this.servicePreinscripcion.rechazarPreinsc(this.id).subscribe((res: any) => console.log(res));
  }

  aceptarPreinscripcion($id: string) {
    console.log($id);
    this.servicePreinscripcion
      .aceptarPreinsc(this.id)
      .subscribe((res: any) => console.log(res));
  }

  sanitizeURL(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
  //async fetchData(): void {}
}
