import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
import { DelegadoI } from "../modules/models/delegado.interface";
import { ResponseI } from "../modules/models/response.interface";

@Injectable({
    providedIn: 'root'
  })
  export class AutenticacionService {
    
    base_url:string = 'http://localhost:8000/'
  
    constructor(private http:HttpClient) { }


    registrar(data){
      return this.http.post(`${this.base_url}api/signup`, data)
    }


    iniciarSesion(data){
      return this.http.post(`${this.base_url}api/login`, data)
    }

    vistaLogIn(): Observable<ResponseI>{
        return this.http.get<ResponseI>(this.base_url+"api/login").pipe(catchError( this.errorHandler));
    }

    usuarioAct(): Observable<ResponseI>{

      const formData = new FormData();
      
      formData.append("token", localStorage.getItem('token')+'');
      console.log(localStorage.getItem('token'));
      return this.http.post<ResponseI>(this.base_url+"api/usuarioActual", formData)
    }

    me(): Observable<ResponseI>{
      return this.http.get<ResponseI>(this.base_url+"api/me").pipe(catchError( this.errorHandler));
    }

    
    

    errorHandler(error: HttpErrorResponse){
        return throwError(error.error.message || 'Error del server');
      }


  }