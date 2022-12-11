import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  infoUsuario: any = '';
  constructor(private authService: AutenticacionService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.usuarioAct()
    .subscribe((data2: any) => (this.infoUsuario = data2, console.log(data2), this.verificarUsuario(data2.role)));
    //this.verificarUsuario();


  }

  verificarUsuario(rol): void{
    if(rol === 'delegado'){
      this.router.navigate(['/vistadelegado'])
    }
  }

}
