import { Component, OnInit } from "@angular/core";
import { InfoGeneralService } from "src/app/services/infoGeneral.service";
import { DelegadoI } from "../models/delegado.interface";
import { ResponseI } from "../models/response.interface";

export interface AngularLink {
  href: string;
  titulo: string;
}

@Component({
  selector: "app-vista-principal",
  templateUrl: "./vista-principal.component.html",
  styleUrls: ["./vista-principal.component.css"],
})
export class VistaPrincipalComponent implements OnInit {
  public $delegado: any;
  public urls: AngularLink[] = [];
  constructor(private http: InfoGeneralService) {}

  ngOnInit(): void {
    // TODO: llamada al api
    // api() => {{ id: 1, delegado: "Rafael", ... }]
    const data: DelegadoI[] = [
      {
        idDelegado: 1,
        nombreDelegado: "Demo",
        apellidoDelegado: "Demo",
        nacionalidadDelegado: "Boliviano",
        edadDelegado: "21",
        correoDelegado: "demo@mail.com",
        contraseniaDelegado: null,
      },
      {
        idDelegado: 2,
        nombreDelegado: "Demo",
        apellidoDelegado: "Demo",
        nacionalidadDelegado: "Boliviano",
        edadDelegado: "21",
        correoDelegado: "demo@mail.com",
        contraseniaDelegado: null,
      },
      {
        idDelegado: 3,
        nombreDelegado: "Demo",
        apellidoDelegado: "Demo",
        nacionalidadDelegado: "Boliviano",
        edadDelegado: "21",
        correoDelegado: "demo@mail.com",
        contraseniaDelegado: null,
      },
      {
        idDelegado: 4,
        nombreDelegado: "Demo",
        apellidoDelegado: "Demo",
        nacionalidadDelegado: "Boliviano",
        edadDelegado: "21",
        correoDelegado: "demo@mail.com",
        contraseniaDelegado: null,
      },
      {
        idDelegado: 5,
        nombreDelegado: "Demo",
        apellidoDelegado: "Demo",
        nacionalidadDelegado: "Boliviano",
        edadDelegado: "21",
        correoDelegado: "demo@mail.com",
        contraseniaDelegado: null,
      },
      {
        idDelegado: 6,
        nombreDelegado: "Demo",
        apellidoDelegado: "Demo",
        nacionalidadDelegado: "Boliviano",
        edadDelegado: "21",
        correoDelegado: "demo@mail.com",
        contraseniaDelegado: null,
      },
    ];

    // TODO: formatear repuesta de la llamada
    this.urls = data.map((delegado) => {
      return {
        href: `/vistadelegado/${delegado.idDelegado}`,
        titulo: delegado.nombreDelegado,
      };
    });
  }

  iniciarSesion($correoDelegado: string, $contraseniaDelegado: string) {
    /*const delegadoEj = new DelegadoI();
    delegadoEj.append("correoDelegado", $correo);
    delegadoEj.append("contraseniaDelegado", $contrasena);*/
    this.http.iniciarDelegado($correoDelegado, $contraseniaDelegado);
    /*.subscribe(data => {
      //let response:ResponseI = data;
      console.log("success");
      console.log(data);
  });*/
  }

  grabar_local_storage($idDelegado: string) {
    let idDelegado = $idDelegado;
    let delegado = {
      idDelegado: $idDelegado,
      correoDelegado: "luis@gmail.com",
    };

    localStorage.setItem("idDelegado", idDelegado);
    localStorage.setItem("delegado", JSON.stringify(delegado));

    let aux = JSON.parse(localStorage.getItem("delegado") || "{}");
    console.log(localStorage.getItem("delegado"));
  }
}
