import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { ElementolistaI } from "../modules/models/elementolista.interface";

@Injectable({
    providedIn: 'root'
  })
  export class ElementolistaService {
    base_url:string = 'http://localhost:8000/'
  
    constructor(private http:HttpClient) { }
  
    getAllPaises():Observable<ElementolistaI[]>{
      return this.http.get<ElementolistaI[]>(this.base_url + "api/Pais/");
    }

    getAllPosiciones():Observable<ElementolistaI[]>{
        return this.http.get<ElementolistaI[]>(this.base_url + "api/posicions/");
    }

    getAllCategorias():Observable<ElementolistaI[]>{
        return this.http.get<ElementolistaI[]>(this.base_url + "api/Categorias/");
    }

    getAllTallas():Observable<ElementolistaI[]>{
      return this.http.get<ElementolistaI[]>(this.base_url + "api/talla/");
  }
  }