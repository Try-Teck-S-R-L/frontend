import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { PreinscripcionI } from "../modules/models/preinscripcion.interface";
import { ResponseI } from "../modules/models/response.interface";


import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: "root",
})
export class SolicitudDelService {
  base_url: string = "http://localhost:8000/";

  constructor(private http: HttpClient) {}

  crearSolicitud( idDelegado:string): Observable<ResponseI> {
    let url = this.base_url + "api/crearsolicitud/";
    //console.log("Service log: ", form);
    const formData = new FormData();

    formData.append("id", idDelegado);
    //formData.append("nombreDelegado", form.nombreEquipo);
    //formData.append("correoDelegado", form.paisEquipo);
    return this.http.post<ResponseI>(url, formData);
  }

  getSolicitud( idDelegado:string): Observable<ResponseI> {
    let url = this.base_url + "api/infosolicitud/";
    //console.log("Service log: ", form);
    const formData = new FormData();

    formData.append("id", idDelegado);
    return this.http.post<ResponseI>(url, formData);
  }

  aprobarSolicitud( idDelegado:string): Observable<ResponseI> {
    let url = this.base_url + "api/aprobarsolicitud/";
    //console.log("Service log: ", form);
    const formData = new FormData();

    formData.append("id", idDelegado);
    return this.http.post<ResponseI>(url, formData);
  }

  rechazarSolicitud( idDelegado:string): Observable<ResponseI> {
    let url = this.base_url + "api/rechazarsolicitud/";
    //console.log("Service log: ", form);
    const formData = new FormData();

    formData.append("id", idDelegado);
    return this.http.post<ResponseI>(url, formData);
  }

  getSolicitudesEspera(): Observable<ResponseI> {
    let url = this.base_url + "api/solicitudesespera/";

    return this.http.get<ResponseI>(url );
  }

}