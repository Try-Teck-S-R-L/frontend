import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PreinscripcionI } from '../modules/models/preinscripcion.interface';
import { ResponseI } from '../modules/models/response.interface';



@Injectable({
  providedIn: 'root'
})
export class PreinscripcionService {
  base_url:string = 'http://localhost:8000/'

  constructor(private http:HttpClient) { }

  Preinscripcion(form:PreinscripcionI):Observable<ResponseI>{
    let url = this.base_url + "api/preinscripciones/"
    return this.http.post<ResponseI>(url, form)
  }
}