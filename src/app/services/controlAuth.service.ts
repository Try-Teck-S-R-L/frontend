import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import { DelegadoI } from "../modules/models/delegado.interface";
import { ResponseI } from "../modules/models/response.interface";
import { TokenService } from "./token.service";

@Injectable({
    providedIn: 'root'
  })
  export class ControlAuthService {
    
    
  
    constructor(private http:HttpClient,
        private tokenService: TokenService) { }

        base_url:string = 'http://localhost:8000/';
    private loggedIn = new BehaviorSubject<boolean>(this.tokenService.loggedIn());
    authStatus = this.loggedIn.asObservable();

    changeStatus(value: boolean){
        this.loggedIn.next(value);
    }
 
  }