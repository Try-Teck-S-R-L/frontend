import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatSort, Sort } from "@angular/material/sort";
import {Location} from '@angular/common';
import { MatTableDataSource } from "@angular/material/table";
import { PreinscripcionService } from "src/app/services/preinscripcion.service";
import { SolicitudDelService } from 'src/app/services/solicitudDel.service';
export interface PeriodicElement {

    nombreEquipo: string;
    //position: number;
    nombreDelegado: string;
    urlequipo: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
  ];

@Component({
  selector: 'app-solicitudespendientes',
  templateUrl: './solicitudespendientes.component.html',
  styleUrls: ['./solicitudespendientes.component.css']
})
export class SolicitudespendientesComponent implements OnInit {
  displayedColumns: string[] = ["nombreEquipo", "nombreDelegado", "urlequipo"];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  //public listaEquipos: any = [];
  public listaPreinscripciones: any = [];

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _location: Location,
    private servicePreinscricion: PreinscripcionService,
    private solicitudesService: SolicitudDelService
  ) {}
  ngOnInit(): void {
    //this.servicePreinscricion.getPreinscripciones().subscribe((res: any) => {
      this.solicitudesService.getSolicitudesEspera().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
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

  /*abrirDetalle($idpreInscripcion: string){
    this.servicePreinscricion.getPreinscripcionBuscada($idpreInscripcion).subscribe((res : any)=>this.valorPreinscripcion = res);;
  }*/

  guardarPreinscripcion($idpreInscripcion: string) {
    let idpreInscripcion = $idpreInscripcion;
    localStorage.setItem("idpreInscripcion", idpreInscripcion);
  }
  atras(){
    this._location.back();
  }
}
