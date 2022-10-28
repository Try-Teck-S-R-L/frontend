import { Component, OnInit } from '@angular/core';
import { InfoGeneralService } from 'src/app/services/infoGeneral.service';
import { DelegadoI } from '../models/delegado.interface';
import { ResponseI } from '../models/response.interface';

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

  iniciarSesion($correoDelegado: string, $contraseniaDelegado: string ){
    /*const delegadoEj = new DelegadoI();
    delegadoEj.append("correoDelegado", $correo);
    delegadoEj.append("contraseniaDelegado", $contrasena);*/
    this.http.iniciarDelegado( $correoDelegado, $contraseniaDelegado );
    /*.subscribe(data => {
      //let response:ResponseI = data;
      console.log("success");
      console.log(data);
  });*/
  }
}
