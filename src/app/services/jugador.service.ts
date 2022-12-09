import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core"
import { JugadorI } from "../modules/models/jugador.interface"
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
      formData.append("token", localStorage.getItem('token')+'');
      return this.http.post<JugadorI[]>(this.base_url + "api/buscarjugadores", formData);
    }

    getJugadoresTorneo():Observable<JugadorI[]>{
      const formData = new FormData();
      
      formData.append("token", localStorage.getItem('token')+'');
      return this.http.get<JugadorI[]>(this.base_url + "api/jugadoresTorneo");
    }

    getJugador($id: string):Observable<JugadorI[]>{
      const formData = new FormData();
      
      formData.append("ciJugador", $id);
      return this.http.post<JugadorI[]>(this.base_url + "api/buscarJugador", formData);
    }




    eliminarJugador(ciJugador:number):Observable<JugadorI>{


      console.log(ciJugador);
      const formData = new FormData();
      
      var aux = ciJugador+'';
      formData.append("ciJugador", aux);

      console.log(aux);
      return this.http.post<JugadorI>(this.base_url+"api/borrarJugador", formData);
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
      formData.append("edadJugador", '50');
      
      formData.append("fotoPerfilJugador", form.fotoPerfilJugador);
      formData.append("fotoCiJugador", form.fotoCiJugador);

      formData.append('idEquipo', idEquipo)
      return this.http.post<ResponseI>(url, formData).pipe(catchError( this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse){
      return throwError(error.error || 'Error del server');
    }
  }