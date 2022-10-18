import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/services/jugador.service';
import { JugadorI } from '../models/jugador.interface';

@Component({
  selector: 'app-vista-delegado',
  templateUrl: './vista-delegado.component.html',
  styleUrls: ['./vista-delegado.component.css']
})
export class VistaDelegadoComponent implements OnInit {

  public listaJugadores:any = [];

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
