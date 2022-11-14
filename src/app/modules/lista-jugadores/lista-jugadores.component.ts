import { ActivatedRoute, Router } from '@angular/router';
import { EquipoI } from './../models/equipo.interface';
import {  OnInit } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild, ElementRef} from '@angular/core';

import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { JugadorService } from 'src/app/services/jugador.service';
export interface PeriodicElement {
  nombreJugador: string;
  //position: number;
  apellidoJugador: string;
  numeroCi: number;
  vermas: string;

}
const ELEMENT_DATA: PeriodicElement[] = [

];
@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombreJugador', 'apellidoJugador', 'numeroCi','vermas'];
    
  public id: string = "";

  name = 'Angular';
  @ViewChild('myModal', {static : true}) myModal:ElementRef;
  
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  public listaJugadores: any = [];

  constructor(private _liveAnnouncer: LiveAnnouncer,router: ActivatedRoute, private serviceJugador: JugadorService,) {
    router.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {
    this.serviceJugador.getAllJugadores(this.id).subscribe((res : any)=>this.dataSource = new MatTableDataSource(res));
    
  }

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    setTimeout(() =>{
      this.myModal.nativeElement.click();;
    }, 1000)
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }






  
  /*eliminarJug($id: number){
    this.serviceJugador.eliminarJugador($id).subscribe((data)=>{
      console.log("success");
  });
    console.log($id);
  }*/

 }

