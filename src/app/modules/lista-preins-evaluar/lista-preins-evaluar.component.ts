import { OnInit } from "@angular/core";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatSort, Sort } from "@angular/material/sort";
import {Location} from '@angular/common';
import { MatTableDataSource } from "@angular/material/table";
import { PreinscripcionService } from "src/app/services/preinscripcion.service";
export interface PeriodicElement {
  nombreEquipo: string;
  //position: number;
  nombreDelegado: string;
  urlequipo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  /*{nombreEquipo: 'Hydrogen', nombreDelegado: '+35', urlequipo: 'Ver detalle'},
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
  selector: 'app-lista-preins-evaluar',
  templateUrl: './lista-preins-evaluar.component.html',
  styleUrls: ['./lista-preins-evaluar.component.css']
})
export class ListaPreinsEvaluarComponent implements OnInit {
  displayedColumns: string[] = ["nombreEquipo", "nombreDelegado", "urlequipo"];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  //public listaEquipos: any = [];
  public listaPreinscripciones: any = [];

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _location: Location,
    private servicePreinscricion: PreinscripcionService
  ) {}
  ngOnInit(): void {
    //this.servicePreinscricion.getPreinscripciones().subscribe((res : any)=>this.listaPreinscripciones = res);
    this.servicePreinscricion.getPreinscripciones().subscribe((res: any) => {
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
