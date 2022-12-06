import { ActivatedRoute, Router } from "@angular/router";
import { EquipoI } from "./../models/equipo.interface";
import { OnInit } from "@angular/core";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { EquipoService } from "src/app/services/equipo.service";
import { TokenService } from "src/app/services/token.service";
import {Location} from '@angular/common';

export interface PeriodicElement {
  nombreEquipo: string;
  //position: number;
  categoria: string;
  //paisEquipo: string;
  vermas: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
/*
  {nombreEquipo: 'Hydrogen', categoria: 'Hydrogen', vermas: 'Ver detalle'},
  {nombreEquipo: 'Helium', categoria: '+35', vermas: 'Ver detalle'},
  {nombreEquipo: 'Lithium', categoria: '+35', vermas: 'Ver detalle'}*/

];
@Component({
  selector: "app-lista-equipos",
  templateUrl: "./lista-equipos.component.html",
  styleUrls: ["./lista-equipos.component.css"],
})
export class ListaEquiposComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ["nombreEquipo", "categoria", "vermas"];

  public id: string = "";

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  public listaEquipos: any = [];

  constructor(
    router: ActivatedRoute,
    private _liveAnnouncer: LiveAnnouncer,
    private tokenService: TokenService,
    private _location: Location,
    private serviceEquipo: EquipoService
  ) {
    router.params.subscribe((params) => {
      //this.id = params["id"];
    });
  }
  ngOnInit(): void {
    this.id = this.tokenService.getDelegadoId();
    //this.serviceEquipo.getAllEquipos(this.id).subscribe((res : any)=>this.listaEquipos = res);
    this.serviceEquipo
      .getAllEquipos(this.id)
      .subscribe((res: any) => (this.dataSource = new MatTableDataSource(res)));
  }

  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  //dataSource = new MatTableDataSource(this.listaEquipos);

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
  atras(){
    this._location.back();
  }
}
