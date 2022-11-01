import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PreinscripcionService } from "src/app/services/preinscripcion.service";

@Component({
  selector: "app-informacionequipos",
  templateUrl: "./informacionequipos.component.html",
  styleUrls: ["./informacionequipos.component.css"],
})
export class InformacionequiposComponent implements OnInit {
  public id: string = "";
  public preinscripcionActual = { "idPreinscripcion": 17, "habilitado": 0, "nombreDelegado": "luis", "email": "luis@gmail.com", "nombreEquipo": "equipoRojo", "pais": "honduras", "numeroComprobante": "123123", "montoPago": 123, "fechaPreinscripcion": "2022-10--31 23:02:58", "idDelegado": 1, "idCategoria": 1 };

  

  constructor(
    router: ActivatedRoute,
    private servicePreinscripcion: PreinscripcionService
  ) {
    router.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  public formularioEquipo: any;

  ngOnInit(): void {
    this.servicePreinscripcion
      .getPreinscripcionBuscada(this.id)
      .subscribe((res: any) => (this.preinscripcionActual = res));
  }

  rechazarPreinscripcion($id: string) {
    this.servicePreinscripcion.rechazarPreinsc(this.id).subscribe((res: any) => console.log(res));
  }

  aceptarPreinscripcion($id: string) {
    console.log($id);
    this.servicePreinscripcion
      .aceptarPreinsc(this.id)
      .subscribe((res: any) => console.log(res));
  }

  //async fetchData(): void {}
}
