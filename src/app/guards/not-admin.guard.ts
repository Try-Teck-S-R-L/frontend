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
export class NotAdminGuard implements CanActivate {
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
      return true;
    }

    //this.router.navigateByUrl("/menuadmin");
    this.router.navigateByUrl("/menuadmin");
    return false;
  }
}
