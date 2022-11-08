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
    private serviceequipo: EquipoService,
    ) {

    router.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {
  }








  /*eliminarJug($id: number){
    this.serviceJugador.eliminarJugador($id).subscribe((data)=>{
      console.log("success");
  });
    console.log($id);
  }*/
}
