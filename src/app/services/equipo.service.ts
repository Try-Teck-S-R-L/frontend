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
  RegistrarEquipo: any;
  
    constructor(private http:HttpClient) { }
  
    getAllEquipos():Observable<EquipoI[]>{

      const formData = new FormData();
      let aux = JSON.parse( localStorage.getItem('idDelegado') || '{}' );
    formData.append("idDelegado", aux);
    console.log( localStorage.getItem('idDelegado') );

      return this.http.post<EquipoI[]>(this.base_url + 'api/pedirequipos', formData);
      //return this.http.get<EquipoI[]>(this.base_url + 'equipos');
    }

    Equipo(form:EquipoI):Observable<ResponseI>{
      let url = this.base_url + "api/equipos/"
      return this.http.post<ResponseI>(url, form)
    }

  }