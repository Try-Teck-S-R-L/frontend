import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { PreinscripcionI } from "../modules/models/preinscripcion.interface";
import { ResponseI } from "../modules/models/response.interface";


import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: "root",
})
export class PreinscripcionService {
  base_url: string = "http://localhost:8000/";

  constructor(private http: HttpClient) {}

  Preinscripcion(form: PreinscripcionI, idDelegado:string): Observable<ResponseI> {
    let url = this.base_url + "api/preinscripciones/";
    console.log("Service log: ", form);
    const formData = new FormData();

    formData.append("fechaPreinscripcion", form.fechaPreinscripcion);
    formData.append("nombreEquipo", form.nombreEquipo);
    formData.append("paisEquipo", form.paisEquipo);
    formData.append("nroComprobante", form.nroComprobante);
    formData.append("montoPago", form.montoPago);
    formData.append("voucherPreinscripcion", form.voucherPreinscripcion);
    formData.append("idCategoria",form.idCategoria);
    formData.append("idDelegado", idDelegado);
    return this.http.post<ResponseI>(url, formData);
  }

  /*errorHandler(error: HttpErrorResponse){
    return throwError(error.error.errors || 'Error del server');
  }*/


  getPreinscripciones():Observable<PreinscripcionI>{
    return this.http.get<PreinscripcionI>(this.base_url + 'api/preinscripciones');
    //return this.http.get<EquipoI[]>(this.base_url + 'equipos');
  }

  getPreinscripcionesEditables(idDelegado:string):Observable<PreinscripcionI>{
    console.log(idDelegado);
    const formData = new FormData();
    
    var aux = idDelegado+'';
    formData.append("idDelegado", aux);

    console.log(aux);
    return this.http.post<PreinscripcionI>(this.base_url+"api/preinscripcionesEditables", formData);
  }

  getPreinscripcionBuscada($idPreinscripcion: string):Observable<any>{
    const formData = new FormData();
    formData.append('idPreinscripcion', $idPreinscripcion);
    return this.http.post<any>(this.base_url + 'api/preinscripcionBuscada', formData);
    //return this.http.get<EquipoI[]>(this.base_url + 'equipos');
  }

  getPreinscripcionGeneral($idPreinscripcion: string):Observable<any>{
    const formData = new FormData();
    formData.append('idPreinscripcion', $idPreinscripcion);
    return this.http.post<any>(this.base_url + 'api/preinscripcionGeneral', formData);
    //return this.http.get<EquipoI[]>(this.base_url + 'equipos');
  }

  getDatosPreinscripcionAprobada($idPreinscripcion: string):Observable<any>{
    const formData = new FormData();
    formData.append('idPreinscripcion', $idPreinscripcion);
    return this.http.post<any>(this.base_url + 'api/preinscripcion_inscribir', formData);
    //return this.http.get<EquipoI[]>(this.base_url + 'equipos');
  }

  eliminarPreinscripcion(idPreinscripcion:number):Observable<PreinscripcionI>{


    console.log(idPreinscripcion);
    const formData = new FormData();
    
    var aux = idPreinscripcion+'';
    formData.append("idPreinscripcion", aux);

    console.log(aux);
    return this.http.post<PreinscripcionI>(this.base_url+"api/borrarPreinscripcion", formData);
  }



  aceptarPreinsc($idPreinscripcion: string):Observable<any>{
    const formData = new FormData();
    formData.append('idPreinscripcion', $idPreinscripcion);
    return this.http.post<any>(this.base_url + 'api/aceptarpreinscripcion', formData);
    //return this.http.get<EquipoI[]>(this.base_url + 'equipos');
  }

  rechazarPreinsc($idPreinscripcion: string):Observable<any>{
    const formData = new FormData();
    formData.append('idPreinscripcion', $idPreinscripcion);
    return this.http.post<any>(this.base_url + 'api/rechazarpreinscripcion', formData);
    //return this.http.get<EquipoI[]>(this.base_url + 'equipos');
  }


  preinscripcionesAceptadas($idDelegado: string):Observable<any[]>{
    const formData = new FormData();
    formData.append('idDelegado', $idDelegado);
    return this.http.post<any[]>(this.base_url + 'api/preinscripcionesAprobadas', formData);
  }

  getPreinscripcionesDelegado($idDelegado: string):Observable<any[]>{
    const formData = new FormData();
    formData.append('idDelegado', $idDelegado);
    return this.http.post<any[]>(this.base_url + 'api/preinscripcionesDelegado', formData);
  }
  
  
}
