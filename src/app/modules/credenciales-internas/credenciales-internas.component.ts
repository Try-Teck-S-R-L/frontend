import { Component, OnInit } from '@angular/core';


import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-credenciales-internas',
  templateUrl: './credenciales-internas.component.html',
  styleUrls: ['./credenciales-internas.component.css']
})
export class CredencialesInternasComponent implements OnInit {
  
  constructor() {
    
  }
  

  
  ngOnInit(): void {
  }


  downloadPDF() {
    // Extraemos el
    const DATA = document.getElementById('credencial');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}credencial.pdf`);
    });
  }



 /* PDFMAKE
  createPdf(){

    const pdfDefinition: any = {
      content: [
        {
          text: 'Hola mundo'
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.download();

  }*/

}

