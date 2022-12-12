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
export class OnlyAdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAdmin = localStorage.getItem("is-admin");
    if (isAdmin == null || isAdmin == undefined || isAdmin != "true") {
      const isDelegado = localStorage.getItem("is-delegado");
        //if (isDelegado == null || isDelegado == undefined || isDelegado != "true") {
            //this.router.navigateByUrl("/mainpage");
            this.router.navigateByUrl("/espera");
            return false;
        //}
        this.router.navigateByUrl("/vistadelegado");
        return false;
      //this.router.navigateByUrl("/admin");
      //return false;
    }

    return true;
  }
}
