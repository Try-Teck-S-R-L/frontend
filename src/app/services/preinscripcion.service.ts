import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { PreinscripcionI } from "../modules/models/preinscripcion.interface";
import { ResponseI } from "../modules/models/response.interface";

@Injectable({
  providedIn: "root",
})
export class PreinscripcionService {
  base_url: string = "http://localhost:8000/";

  constructor(private http: HttpClient) {}

  Preinscripcion(form: PreinscripcionI): Observable<ResponseI> {
    let url = this.base_url + "api/preinscripciones/";
    console.log("Service log: ", form);
    const formData = new FormData();
    formData.append("categoria", form.categoria);
    formData.append("emailDelegado", form.emailDelegado);
    formData.append("nombreDelegado", form.nombreDelegado);
    formData.append("fechaPreinscripcion", form.fechaPreinscripcion);
    formData.append("nombreEquipo", form.nombreEquipo);
    formData.append("paisEquipo", form.paisEquipo);
    formData.append("numeroComprobante", form.nroComprobante);
    formData.append("montoPago", form.montoPago);
    formData.append("voucherPreinscripcion", form.voucherPreinscripcion);
    formData.append("idCategoria",form.categoria);
    let aux = JSON.parse( localStorage.getItem('idDelegado') || '{}' );
    formData.append("idDelegado", aux);
    return this.http.post<ResponseI>(url, formData);
  }

  getPreinscripciones():Observable<PreinscripcionI>{
    return this.http.get<PreinscripcionI>(this.base_url + 'api/preinscripciones');
    //return this.http.get<EquipoI[]>(this.base_url + 'equipos');
  }

  getPreinscripcionBuscada($idpreInscripcion: string):Observable<any>{
    const formData = new FormData();
    formData.append('idPreinscripcion', $idpreInscripcion);
    return this.http.post<any>(this.base_url + 'api/preinscripcionBuscada', formData);
    //return this.http.get<EquipoI[]>(this.base_url + 'equipos');
  }


  aceptarPreinsc($idpreInscripcion: string):Observable<any>{
    const formData = new FormData();
    formData.append('idPreinscripcion', $idpreInscripcion);
    return this.http.post<any>(this.base_url + 'api/aceptarpreinscripcion', formData);
    //return this.http.get<EquipoI[]>(this.base_url + 'equipos');
  }

  rechazarPreinsc($idpreInscripcion: string):Observable<any>{
    const formData = new FormData();
    formData.append('idPreinscripcion', $idpreInscripcion);
    return this.http.post<any>(this.base_url + 'api/rechazarpreinscripcion', formData);
    //return this.http.get<EquipoI[]>(this.base_url + 'equipos');
  }


  
}
