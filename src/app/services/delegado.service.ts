import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class DelegadoService {
    
    base_url:string = 'http://localhost:8000/'
  
    constructor(private http:HttpClient) { }


    getInfoDelegado($idDelegado: string):Observable<any>{
        const formData = new FormData();
        formData.append("idDelegado", $idDelegado);
        return this.http.post<any>(this.base_url + 'api/delegadoInfo', formData);

    }
  }

  