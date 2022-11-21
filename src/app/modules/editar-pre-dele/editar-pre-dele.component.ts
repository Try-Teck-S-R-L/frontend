import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoGeneralService } from 'src/app/services/infoGeneral.service';
import { PreinscripcionService } from 'src/app/services/preinscripcion.service';

@Component({
  selector: 'app-editar-pre-dele',
  templateUrl: './editar-pre-dele.component.html',
  styleUrls: ['./editar-pre-dele.component.css']
})
export class EditarPreDeleComponent implements OnInit {

  public idDelegado: string = "";
  public datosPreinscripcion: any = [];
  public fechaValida: number;

  constructor(router: ActivatedRoute,
    private generalService: InfoGeneralService,
    private servicePreinscripcion: PreinscripcionService) {
      router.params.subscribe((params) => {
        this.idDelegado = params["id"];
      });
    }

  ngOnInit(): void {

    this.generalService.verificarFechaValida().subscribe(data => {this.fechaValida = data;
    });

    this.servicePreinscripcion.getPreinscripcionGeneral(this.idDelegado).subscribe((res : any)=>{this.datosPreinscripcion = res, console.log(res)});
    
  }

}
