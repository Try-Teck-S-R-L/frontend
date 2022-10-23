import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/services/jugador.service';
@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit {

  public listaJugadores: any = [];

  constructor( private http: JugadorService) { 

  }

  ngOnInit(): void {
    this.http.getAllJugadores().subscribe(data => (this.listaJugadores = data));
    console.log(this.listaJugadores);
  }

  delete($id: number){
    this.http.eliminarJugador($id).subscribe((data)=>{
      console.log("success");
  });
 }
}
