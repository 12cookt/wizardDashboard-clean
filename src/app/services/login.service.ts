import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLoggedIn: boolean;
  public showAccount: string;

  constructor() {
    this.isLoggedIn = false;
    this.showAccount = '';
  }

  async getAccount() {
    const accounts: Array<any> | null | undefined = await window.ethereum.request({ method: 'eth_requestAccounts' });
    if (accounts) {
      const account = accounts[0];
      this.showAccount = account;
      this.isLoggedIn = true;
    }
    console.log("Logged in? Service says: " + this.isLoggedIn)
    return this.isLoggedIn;
  }
}
