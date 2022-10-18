import { JugadorI } from './../models/jugador.interface';
import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/services/jugador.service';


@Component({
  selector: 'app-vista-delegado',
  templateUrl: './vista-delegado.component.html',
  styleUrls: ['./vista-delegado.component.css']
})
export class VistaDelegadoComponent implements OnInit {

  jugadores: JugadorI[] = [];

  constructor( private http: JugadorService) { 

  }

  ngOnInit(): void {
    this.http.getAllJugadores().subscribe(data => (this.jugadores = data));
    console.log(this.jugadores);
  }

  delete($id: number){
    this.http.eliminarJugador($id).subscribe((data)=>{
      console.log("success");
  });
 }

}
