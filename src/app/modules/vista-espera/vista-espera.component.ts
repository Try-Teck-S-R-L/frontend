import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { SolicitudDelService } from 'src/app/services/solicitudDel.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-vista-espera',
  templateUrl: './vista-espera.component.html',
  styleUrls: ['./vista-espera.component.css']
})
export class VistaEsperaComponent implements OnInit {


  public idDel: any = '';
  public cuentaAct: any = '';
  //public espera: number = '';
  constructor(private solicitudService: SolicitudDelService,
    private tokenService: TokenService,
    private routerView:Router,
    private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {


    this.idDel = this.tokenService.getDelegadoId();
    this.autenticacionService.usuarioAct()
    .subscribe((data2: any) => {this.cuentaAct = data2;
       if(data2.role === 'espera'){
        this.routerView.navigate(['vistaerror/Su solicitud esta siendo revisada'], { skipLocationChange: true });
    
       };});

    //this.solicitudService.crearSolicitud(this.idDel).subscribe((data) => (console.log(data)));
  }


  solicitar(): void{
    this.solicitudService.crearSolicitud(this.idDel).subscribe((data) => (console.log(data)));
    this.autenticacionService.actualizarUsuario(this.idDel).subscribe((data) => (window.location.reload()));
    //this.routerView.navigate(['/espera']);
    //window.location.reload();
  }
}
