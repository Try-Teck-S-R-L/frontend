import { Component, OnInit } from '@angular/core';
import { InfoGeneralService } from 'src/app/services/infoGeneral.service';
import { DelegadoI } from '../models/delegado.interface';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})
export class VistaPrincipalComponent implements OnInit {


  public $delegado : any;
  constructor(private http: InfoGeneralService) {}

  ngOnInit(): void {
  }

  iniciarSesion($correo: string, $contrasena: string ){
    /*const delegadoEj = new DelegadoI();
    delegadoEj.append("correoDelegado", $correo);
    delegadoEj.append("contraseniaDelegado", $contrasena);*/
    this.http.iniciarDelegado( $correo, $contrasena ).subscribe((data)=>{
      console.log("success");
  });
  }
}
