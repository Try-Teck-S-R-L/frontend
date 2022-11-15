import {OnInit } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PreinscripcionService } from 'src/app/services/preinscripcion.service';
import { ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  nombreEquipo: string;
  
  habilitado: number;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
 
];

@Component({
  selector: 'app-eliminar-preinscripcion-delegado',
  templateUrl: './eliminar-preinscripcion-delegado.component.html',
  styleUrls: ['./eliminar-preinscripcion-delegado.component.css']
})
export class EliminarPreinscripcionDelegadoComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [ 'nombreEquipo', 'habilitado','eliminarPreinscricion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  public idDelegado: string = "";
  public listapre: any = [];
  constructor(private _liveAnnouncer: LiveAnnouncer,router: ActivatedRoute,
    private servicePreinscripcion: PreinscripcionService) {
      router.params.subscribe((params) => {
        this.idDelegado = params["id"];
      });
    }
  ngOnInit(): void {
    this.servicePreinscripcion.getPreinscripcionesDelegado(this.idDelegado).subscribe((res : any)=>{this.dataSource = new MatTableDataSource(res), console.log(res)});
    
  }






  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
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

  eliminarPreinscripcion($id: number){

    this.servicePreinscripcion.eliminarPreinscripcion($id).subscribe((data)=>{
      console.log("success");
  });
    console.log($id);
  }
}