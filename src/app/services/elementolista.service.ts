import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { ElementolistaI } from "../modules/models/elementoLista.interface";

@Injectable({
    providedIn: 'root'
  })
  export class ElementolistaService {
    base_url:string = 'http://localhost:8000/'
  
    constructor(private http:HttpClient) { }
  
    getAllPaises():Observable<ElementolistaI[]>{
      return this.http.get<ElementolistaI[]>(this.base_url + "api/paises/");
    }

    getAllPosiciones():Observable<ElementolistaI[]>{
        return this.http.get<ElementolistaI[]>(this.base_url + "api/posiciones/");
    }

    getAllCategorias():Observable<ElementolistaI[]>{
        return this.http.get<ElementolistaI[]>(this.base_url + "api/categorias/");
    }

    getAllTallas():Observable<ElementolistaI[]>{
      return this.http.get<ElementolistaI[]>(this.base_url + "api/tallas/");
  }
  }