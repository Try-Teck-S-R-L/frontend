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
  
    getAllJugadores($id: string):Observable<JugadorI[]>{
      const formData = new FormData();
      
      formData.append("idEquipo", $id);
      return this.http.post<JugadorI[]>(this.base_url + "api/buscarjugadores", formData);
    }

    eliminarJugador($id:number){

      return this.http.delete(this.base_url+"api/jugador/"+$id);
    }

    jugador(form: JugadorI, idEquipo: string): Observable<ResponseI> {
      let url = this.base_url + "api/jugador/";
      console.log("Service log: ", form);
      const formData = new FormData();
      
      formData.append("ciJugador", form.ciJugador);
      formData.append("nombreJugador", form.nombreJugador);
      formData.append("apellidoJugador", form.apellidoJugador);
      formData.append("nacionalidadJugador", form.nacionalidadJugador);
      formData.append("tallaJugador", form.tallaJugador);
      formData.append("posicionJugador", form.posicionJugador);
      formData.append("numeroCamiseta", form.numeroCamiseta);
      formData.append("edadJugador", form.edadJugador);
      
      formData.append("fotoPerfilJugador", form.fotoPerfilJugador);
      formData.append("fotoCiJugador", form.fotoCiJugador);

      formData.append('idEquipo', idEquipo)
      return this.http.post<ResponseI>(url, formData);
    }
  }