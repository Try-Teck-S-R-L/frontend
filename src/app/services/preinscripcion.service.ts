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
    formData.append("nombreEquipo", form.nombreDelegado);
    formData.append("paisEquipo", form.paisEquipo);
    formData.append("voucherPreinscripcion", form.voucherPreinscripcion);
    return this.http.post<ResponseI>(url, formData);
  }
}
