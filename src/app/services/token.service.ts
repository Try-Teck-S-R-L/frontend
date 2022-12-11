import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  private iss = {
    login: "http://localhost:8000/api/login",
    signup: "http://localhost:8000/api/signup",
  };
  base_url: string = "http://localhost:8000/";

  constructor(private http: HttpClient) {}

  handle(token) {
    this.set(token);
    console.log(this.isValid());
  }

  set(token) {
    localStorage.setItem("token", token);
  }

  get() {
    return localStorage.getItem("token");
  }

  remove() {
    localStorage.removeItem("token");
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);

      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }

    return false;
  }

  payload(token) {
    const payload = token.split(".")[1];
    return this.decode(payload);
  }

  decode(payload) {
    console.log(JSON.parse(atob(payload)));
    //console.log('wea');
    return JSON.parse(atob(payload));
  }

  getDelegadoId() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);

      if (payload) {
        return payload.sub;
      }
    }
  }

  loggedIn() {
    return this.isValid();
  }
}
