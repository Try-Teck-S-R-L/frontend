import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { ResponseI } from '../modules/models/response.interface';
import { EquipoI } from "../modules/models/equipo.interface";


@Injectable({
    providedIn: 'root'
  })
  export class EquipoService {
    base_url:string = 'http://localhost:8000/'
  
    constructor(private http:HttpClient) { }
  
    getAllEquipos():Observable<EquipoI[]>{
      return this.http.get<EquipoI[]>(this.base_url + 'api/equipo');
    }

    Equipo(form:EquipoI):Observable<ResponseI>{
      let url = this.base_url + "api/equipo/"
      return this.http.post<ResponseI>(url, form)
    }
  }