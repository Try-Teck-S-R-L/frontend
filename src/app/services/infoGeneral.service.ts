import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { DelegadoI } from "../modules/models/delegado.interface";

@Injectable({
    providedIn: 'root'
  })
  export class InfoGeneralService {
    base_url:string = 'http://localhost:8000/'

    constructor(private http:HttpClient) { }

    getDelegado():Observable<DelegadoI>{
      return this.http.get<DelegadoI>(this.base_url + "auth/verificar");
    }

  }