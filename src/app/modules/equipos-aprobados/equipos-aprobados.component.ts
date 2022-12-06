import { ActivatedRoute, Router } from "@angular/router";
import { EquipoI } from "./../models/equipo.interface";
import { OnInit } from "@angular/core";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { EquipoService } from "src/app/services/equipo.service";
import { PreinscripcionService } from "src/app/services/preinscripcion.service";
import { DelegadoService } from "src/app/services/delegado.service";
import { TokenService } from "src/app/services/token.service";
import {Location} from '@angular/common';
export interface PeriodicElement {
  nombreEquipo: string;
  idCategoria: string;
  urlinscripcion: string;
}const ELEMENT_DATA: PeriodicElement[] = [
  /*{nombreEquipo: 'Hydrogen', idCategoria: '+35', urlinscripcion: 'Ver detalle'},
  {nombreEquipo: 'Helium', nombreDelegado: '+35', urlequipo: 'Ver detalle'},
  {nombreEquipo: 'Lithium', nombreDelegado: '+35', urlequipo: 'Ver detalle'},
  {nombreEquipo: 'Beryllium', nombreDelegado: '+35', urlequipo: 'Ver detalle'},
  {nombreEquipo: 'Boron', nombreDelegado: '+35', urlequipo: 'Ver detalle'},
  {nombreEquipo: 'Carbon', nombreDelegado: '+35', urlequipo: 'Ver detalle'},
  {nombreEquipo: 'Nitrogen', nombreDelegado: '+35', urlequipo: 'Ver detalle'},
  {nombreEquipo: 'Oxygen', nombreDelegado: '+35', urlequipo: 'Ver detalle'},
  {nombreEquipo: 'Fluorine', nombreDelegado: '+35', urlequipo: 'Ver detalle'},
  {nombreEquipo: 'Neon', nombreDelegado: '+35', urlequipo: 'Ver detalle'},*/
];
@Component({
  selector: 'app-equipos-aprobados',
  templateUrl: './equipos-aprobados.component.html',
  styleUrls: ['./equipos-aprobados.component.css']
})
export class EquiposAprobadosComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ["nombreEquipo", "idCategoria", "urlinscripcion"];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  //public listaEquipos: any = [];
  public listaPreinscripciones: any = [];
  public idDel: string = '';
  constructor(
    router: ActivatedRoute,
    private _liveAnnouncer: LiveAnnouncer,
    private tokenService: TokenService,
    private _location: Location,
    private servicePreinscricion: PreinscripcionService
  ) {
    router.params.subscribe((params) => {
      //this.idDel = params["id"];
    });
  }
  ngOnInit(): void {
    //this.servicePreinscricion.getPreinscripciones().subscribe((res : any)=>this.listaPreinscripciones = res);
    this.idDel = this.tokenService.getDelegadoId();
    this.servicePreinscricion.preinscripcionesAceptadas(this.idDel).subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
      this.listaPreinscripciones = res;
      console.log(res);
    });
    //dataSource = new MatTableDataSource(this.listaPreinscripciones);
  }
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce("Sorting cleared");
    }
  }
  guardarPreinscripcion($idpreInscripcion: string) {
    let idpreInscripcion = $idpreInscripcion;
    localStorage.setItem("idpreInscripcion", idpreInscripcion);
  }
  
 
  atras(){
    this._location.back();
  }
}

