import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class DelegadoGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isDelegado = localStorage.getItem("is-delegado");
    if (isDelegado == null || isDelegado == undefined || isDelegado != "true") {
        const isDelegado = localStorage.getItem("is-admin");
        //if (isDelegado == null || isDelegado == undefined || isDelegado != "true") {
            //this.router.navigateByUrl("/mainpage");
            this.router.navigateByUrl("/espera");
            return false;
        //}
        this.router.navigateByUrl("/menuadmin");
        return false;
    }

    return true;
  }
}
