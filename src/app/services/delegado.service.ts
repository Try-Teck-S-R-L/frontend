import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
import { DelegadoI } from "../modules/models/delegado.interface";
import { ResponseI } from "../modules/models/response.interface";

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

    registrarDelegado(form: DelegadoI): Observable<ResponseI> {
      let url = this.base_url + "api/registrarDelegado/";
      console.log("Service log: ", form);
      const formData = new FormData();
      
      formData.append("ciDelegado", form.ciDelegado);
      formData.append("correoDelegado", form.correoDelegado);
      formData.append("nombreDelegado", form.nombreDelegado);
      formData.append("apellidoDelegado", form.apellidoDelegado);
      formData.append("edadDelegado", form.edadDelegado);
      formData.append("nacionalidadDelegado", form.nacionalidadDelegado);
      formData.append("fotoPerfilDelegado", form.fotoPerfilDelegado);
      formData.append("fotoCiDelegado", form.fotoCiDelegado);
      formData.append("contraseniaDelegado", '123123123');

      return this.http.post<ResponseI>(url, formData) //.pipe(catchError( this.errorHandler));
    }


    loginDelegado(form: DelegadoI): Observable<ResponseI> {
      let url = this.base_url + "api/loginDelegado/";
      console.log("Service log: ", form);
      const formData = new FormData();
      
      formData.append("email", form.correoDelegado);
      formData.append("password", form.contrasenaDelegado);


      return this.http.post<ResponseI>(url, formData) //.pipe(catchError( this.errorHandler));
    }



    errorHandler(error: HttpErrorResponse){
      return throwError(error.error || 'Error del server');
    }
  }

  