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
    private _location: Location,
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

  downloadPDF() {
    // Extraemos el
    const DATA = document.getElementById('credencial');
    const doc = new jsPDF('p', 'pt', 'carta');
    const options = {
      background: 'white',
      scale: 3
    };
    
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 5;
      const bufferY = 5;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}credencial.pdf`);
    });
  }

  atras(){
    this._location.back();
  }
}
