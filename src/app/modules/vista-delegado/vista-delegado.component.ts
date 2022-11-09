import { JugadorI } from './../models/jugador.interface';
import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/services/jugador.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vista-delegado',
  templateUrl: './vista-delegado.component.html',
  styleUrls: ['./vista-delegado.component.css']
})
export class VistaDelegadoComponent implements OnInit {

  public id: string = "";
  public listaJugadores: any = [];

  constructor( router: ActivatedRoute,private http: JugadorService) { 
    router.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {
    /*this.http.getAllJugadores().subscribe(data => (this.listaJugadores = data));
    console.log(this.listaJugadores);*/
  }

  /*delete($id: number){
    this.http.eliminarJugador($id).subscribe((data)=>{
      console.log("success");
  });
 }*/

}
