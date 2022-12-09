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
  public weafome = 'http://127.0.0.1:8000/bicho-841045362_1670460678.jpg'


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
    this.startDownload(this.weafome);

  }
  get equipoJugador(){ return this.credencial.value.equipos; }

  downloadPDF() {
    // Extraemos el
    const DATA = document.getElementById('credencial');
    const doc = new jsPDF('p', 'pt', 'carta');
    const options = {
      background: 'white',
      useCORS: true,
      scale: 3
    };
    
    html2canvas(DATA, options).then((canvas) => {
      
      const img = canvas.toDataURL('image/JPG');

      // Add image Canvas to PDF
      const bufferX = 5;
      const bufferY = 5;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'JPG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}credencial.pdf`);

    });


  }

  atras(){
    this._location.back();
  }


  downloadedImg: any = '';

  startDownload(imageURL) {
    //let imageURL = "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";
    let imageDescription = "The Mozilla logo";
  
    this.downloadedImg = new Image();
    this.downloadedImg.crossOrigin = "Anonymous";
    this.downloadedImg.addEventListener("load", this.imageReceived(), false);
    this.downloadedImg.alt = imageDescription;
    this.downloadedImg.src = imageURL;
  }

  imageReceived() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = this.downloadedImg.width;
    canvas.height = this.downloadedImg.height;
    canvas.innerText = this.downloadedImg.alt;
  
    context.drawImage(this.downloadedImg, 0, 0);
    //imageBox.appendChild(canvas);
  
    try {
      localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }
}
