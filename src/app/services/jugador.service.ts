import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { JugadorI } from "../modules/models/jugador.interface"
import { Observable } from 'rxjs';
import { ResponseI } from '../modules/models/response.interface';


@Injectable({
    providedIn: 'root'
  })
  export class JugadorService {
    base_url:string = 'http://localhost:8000/'
  
    constructor(private http:HttpClient) { }
  
    Jugador(form:JugadorI):Observable<ResponseI>{
      let url = this.base_url + "api/jugador/"
      return this.http.post<ResponseI>(url, form)
    }
  }