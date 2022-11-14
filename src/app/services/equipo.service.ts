
import { Injectable } from "@angular/core"
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ResponseI } from '../modules/models/response.interface';
import { EquipoI } from "../modules/models/equipo.interface";
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class EquipoService {
    base_url:string = 'http://localhost:8000/'
  //RegistrarEquipo: any;
  
    constructor(private http:HttpClient) { }
  
    getAllEquipos($idDelegado: string):Observable<any[]>{

      const formData = new FormData();
      formData.append("idDelegado", $idDelegado);
      return this.http.post<any[]>(this.base_url + 'api/filtrarequipos', formData);
      //return this.http.get<EquipoI[]>(this.base_url + 'api/equipos');
    }


    RegistrarEquipo(form:EquipoI, idPreinscripcion:string):Observable<ResponseI>{
      let url = this.base_url + "api/equipos/"

      const formData  = new FormData();
      console.log("Service log: ", form);
      formData.append('logoEquipo', form.logoEquipo);
      formData.append('idPreinscripcion', form.idPreinscripcion);
      formData.append('colorCamisetaPrincipal', form.colorCamisetaPrincipal);
      formData.append('colorCamisetaSecundario', form.colorCamisetaSecundario);
    

      console.log(JSON.stringify(formData))

      return this.http.post<ResponseI>(url, formData).pipe(catchError( this.errorHandler));

    }

    errorHandler(error: HttpErrorResponse){
      return throwError(error.error || 'Error del server');
    }


    equipoXid($idEquipo: string){
      let url = this.base_url + "api/equipos/"
    }

    getEquipoXid(idEquipo: string): Observable<ResponseI>{
      let url = this.base_url + "api/equipoId/"

      const formData  = new FormData();
      formData.append('idEquipo', idEquipo);

      return this.http.post<ResponseI>(url, formData);
    }
  }