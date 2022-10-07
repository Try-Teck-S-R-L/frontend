import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-vista-delegado',
  templateUrl: './vista-delegado.component.html',
  styleUrls: ['./vista-delegado.component.css']
})
export class VistaDelegadoComponent implements OnInit {

  constructor( private http: JugadorService) { }

  ngOnInit(): void {
    this.http.getAllJugadores().subscribe(data => console.log(data));
  }

}
