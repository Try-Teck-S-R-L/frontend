import { Component, OnInit } from '@angular/core';
import { JugadorI } from './../models/jugador.interface';
import { PreinscripcionService } from 'src/app/services/preinscripcion.service';
import { JugadorService } from 'src/app/services/jugador.service';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-menu-preinscripcion-delegado',
  templateUrl: './menu-preinscripcion-delegado.component.html',
  styleUrls: ['./menu-preinscripcion-delegado.component.css']
})
export class MenuPreinscripcionDelegadoComponent implements OnInit {

  public id: string = "";
  public listaJugadores: any = [];

  constructor( router: ActivatedRoute,
    private http: JugadorService,
    private _location: Location,
    private tokenService: TokenService) { 
    router.params.subscribe((params) => {
      //this.id = params["id"];
    });
  }

  ngOnInit(): void {
    this.id = this.tokenService.getDelegadoId();
  }
  atras(){
    this._location.back();
  }
}
