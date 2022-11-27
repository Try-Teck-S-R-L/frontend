import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OnlyAdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = localStorage.getItem("user-data");
    if (user == null || user == undefined) {
      return false;
    }

    return user.adminitrador == true;
    // 1. Acceder al token o usuario desde el guard
    //  1.1. Almacenamiento local
    //  1.2. Redux
    //  1.3. Token y almacenamiento local

    // 2. Verificar si es admin o no
    // 3. Devolver si es admin o no

    // login => token | user

    // if user.admin == true ||token in adminTokens:
    //    return true
    // else:
    //    return false

    return true;
  }
}
