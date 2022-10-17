import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { JugadorI } from "../modules/models/jugador.interface"
import { Observable } from 'rxjs';
import { ResponseI } from '../modules/models/response.interface';


@Injectable({
    providedIn: 'root'
  })
  export class JugadorService {
    
    base_url:string = 'http://localhost:8000/'
  
    constructor(private http:HttpClient) { }
  
    getAllJugadores():Observable<JugadorI[]>{
      return this.http.get<JugadorI[]>(this.base_url + "api/jugador/");
    }

    jugador(form: JugadorI): Observable<ResponseI> {
      let url = this.base_url + "api/jugador/";
      console.log("Service log: ", form);
      const formData = new FormData();
      
      formData.append("nombreJugador", form.nombrejugador);
      formData.append("apellidoJugador", form.apellidojugador);
      formData.append("categoria", form.categoria);
      formData.append("nacionalidadJugador", form.nacionalidadjugador);
      formData.append("tallaJugador", form.tallajugador);
      formData.append("posicionJugador", form.posicionjugador);
      formData.append("numeroCamiseta", form.numerocamiseta);
      formData.append("edadJugador", form.edadjugador);
      
      formData.append("fotoPerfilJugador", form.fotoperfiljugador);
      return this.http.post<ResponseI>(url, formData);
      formData.append("fotocijugador", form.fotocijugador);
      return this.http.post<ResponseI>(url, formData);
    }
  }