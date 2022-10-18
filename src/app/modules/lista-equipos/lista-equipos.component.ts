import { Router } from '@angular/router';
import { EquipoI } from './../models/equipo.interface';
import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/services/equipo.service';
@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})
export class ListaEquiposComponent implements OnInit {

  public listaEquipos: any = [];
  constructor(private serviceEquipo: EquipoService,) { }

  ngOnInit(): void {
    this.serviceEquipo.getAllEquipos().subscribe((res : any)=>this.listaEquipos = res);
  }

}
