import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-error',
  templateUrl: './vista-error.component.html',
  styleUrls: ['./vista-error.component.css']
})
export class VistaErrorComponent implements OnInit {

  public mensajeContenido: string = "";

  constructor(router: ActivatedRoute) {
    router.params.subscribe((params) => {
      this.mensajeContenido = params["mensaje"];
    });
   }

  ngOnInit(): void {
    
  }

}
