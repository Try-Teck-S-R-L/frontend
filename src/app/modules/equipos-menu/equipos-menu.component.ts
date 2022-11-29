import { EquipoService } from './../../services/equipo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoI } from './../models/equipo.interface';
import {  OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { JugadorService } from 'src/app/services/jugador.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { TokenService } from 'src/app/services/token.service';
interface CountryOption {
  name: string;
  value: string;
}
@Component({
  selector: 'app-equipos-menu',
  templateUrl: './equipos-menu.component.html',
  styleUrls: ['./equipos-menu.component.css']
})
export class EquiposMenuComponent implements OnInit {
  public id: string = "";
  
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private http: EquipoService,
    router: ActivatedRoute, 
    private tokenService: TokenService,
    private serviceequipo: EquipoService,
    private autenticacionService: AutenticacionService,
    ) {

    router.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {
    this.tokenService.payload(this.tokenService.get());
    /*this.autenticacionService.me().subscribe( data => console.log(data));
    this.autenticacionService.usuarioAct().subscribe( data => console.log(data));*/
    
  }








  /*eliminarJug($id: number){
    this.serviceJugador.eliminarJugador($id).subscribe((data)=>{
      console.log("success");
  });
    console.log($id);
  }*/
}
