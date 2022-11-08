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
  
    getAllEquipos($idDelegado: string):Observable<any[]>{

      const formData = new FormData();
      formData.append("idDelegado", $idDelegado);
      return this.http.post<any[]>(this.base_url + 'api/filtrarequipos', formData);
      //return this.http.get<EquipoI[]>(this.base_url + 'api/equipos');
    }


    Equipo(form:EquipoI):Observable<ResponseI>{
      let url = this.base_url + "api/equipos/"
      
      return this.http.post<ResponseI>(url, form)

    }

    equipoXid($id: string){
      let url = this.base_url + "api/equipos/"
    }

  }