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
export class NotDelegadoGuard implements CanActivate {
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
      return true;
    }

    this.router.navigateByUrl("/vistadelegado");
    return false;
  }
}
