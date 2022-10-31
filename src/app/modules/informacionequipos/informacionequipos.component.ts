import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-informacionequipos",
  templateUrl: "./informacionequipos.component.html",
  styleUrls: ["./informacionequipos.component.css"],
})
export class InformacionequiposComponent implements OnInit {
  public id: string = "";

  constructor(router: ActivatedRoute) {
    router.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  public formularioEquipo: any;

  ngOnInit(): void {
    
  }

  //async fetchData(): void {}
}
