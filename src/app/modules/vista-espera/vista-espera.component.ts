import { Component, OnInit } from '@angular/core';
import { SolicitudDelService } from 'src/app/services/solicitudDel.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-vista-espera',
  templateUrl: './vista-espera.component.html',
  styleUrls: ['./vista-espera.component.css']
})
export class VistaEsperaComponent implements OnInit {


  public idDel: any = '';
  constructor(private solicitudService: SolicitudDelService,
    private tokenService: TokenService) { }

  ngOnInit(): void {

    this.idDel = this.tokenService.getDelegadoId();
    //this.solicitudService.crearSolicitud(this.idDel).subscribe((data) => (console.log(data)));
  }


  solicitar(): void{
    this.solicitudService.crearSolicitud(this.idDel).subscribe((data) => (console.log(data)));
  }
}
