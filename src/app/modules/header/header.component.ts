import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ControlAuthService } from "src/app/services/controlAuth.service";
import { TokenService } from "src/app/services/token.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  public loggedIn: boolean;

  constructor(
    private router: Router,
    private Auth: ControlAuthService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.Auth.authStatus.subscribe((value) => (this.loggedIn = value));
  }

  logout(event: MouseEvent) {
    this.tokenService.remove();
    this.Auth.changeStatus(false);
    this.router.navigateByUrl("/login");
    localStorage.clear();
  }
}
