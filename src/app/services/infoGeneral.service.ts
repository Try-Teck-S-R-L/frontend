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

    iniciarDelegado(correo: string, contrasena: string):Observable<ResponseI>{
        let final_url =this.base_url + "auth/verificar";
        const delegadoEj = new FormData();
        //const delegadoEj : DelegadoI;
        delegadoEj.append("correoDelegado", correo);
        delegadoEj.append("contraseniaDelegado", contrasena);
      return this.http.post<ResponseI>(final_url, delegadoEj);
    }

  }