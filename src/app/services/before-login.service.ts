import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
  export class BeforeLoginService implements CanActivate{
    base_url:string = 'http://localhost:8000/'
  
    constructor(private http:HttpClient,
        private tokenService: TokenService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree |
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return !this.tokenService.loggedIn();
    }

  }