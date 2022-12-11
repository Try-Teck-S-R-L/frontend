import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  constructor(private authService: AutenticacionService) { }

  ngOnInit(): void {
    this.authService.usuarioAct().subscribe((data2: any) => (console.log(data2)));


  }

}
