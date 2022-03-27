import { Component, OnInit } from '@angular/core';
import { MetaMaskInpageProvider } from "@metamask/providers";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _loginService: LoginService;

  constructor(loginService: LoginService, private router: Router) {
    this._loginService = loginService;
  }

  ngOnInit(): void {
  }

  get loginService(): LoginService {
    return this._loginService;
  }

  getAccount() {
    this._loginService.getAccount();
    this.routeToDashboard();
  }

  routeToDashboard() {
      this.router.navigateByUrl('/home')
  }

  navigateHome(){
    console.log("hello");
  }
  toggleSidebar(){
    console.log("hello2");
  }


}
