import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLoggedIn: boolean;
  public showAccount: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.isLoggedIn = false;
    this.showAccount = '';
  }

   async getAccount() {
    const accounts: any = await window.ethereum.request({ method: 'eth_requestAccounts' });
    if (accounts) {
      const account = accounts[0];
      this.showAccount = account;
      this.isLoggedIn = true;
    }
    console.log("Logged in? Service says: " + this.isLoggedIn)
    return this.isLoggedIn;
  }

  routeToDashboard(redirectUrl: string) {
    console.log(redirectUrl);
    console.log(this.isLoggedIn);
    if (this.isLoggedIn)
      this.router.navigateByUrl(redirectUrl);
  }
}
