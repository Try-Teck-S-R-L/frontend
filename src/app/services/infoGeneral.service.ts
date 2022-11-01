import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { DelegadoI } from "../modules/models/delegado.interface";
import { ResponseI } from "../modules/models/response.interface";

@Injectable({
    providedIn: 'root'
  })
  export class InfoGeneralService {
    base_url:string = 'http://localhost:8000/'

    constructor(private http:HttpClient) { }

    iniciarDelegado(correo: string, contrasena: string):void{
        let final_url =this.base_url + "api/auth/verificar";
        //let final_url =this.base_url + "auth/verificar";
        const delegadoEj = new FormData();
        //const delegadoEj : DelegadoI;
        delegadoEj.append("correoDelegado", correo);
        delegadoEj.append("contraseniaDelegado", contrasena);

        const data = {
          correoDelegado: correo,
          contraseniaDelegado: contrasena
        };

      
      this.http.post(final_url, data).subscribe(data => {
        //let response:ResponseI = data;
        //console.log("success");
        console.log(data);
      });
    }


    iniciarDel(idDelegado: string){
      
    }

  }