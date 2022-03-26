import { Component, OnInit } from '@angular/core';
import { MetaMaskInpageProvider } from "@metamask/providers";

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

  loggedIn: boolean;
  showAccount: string;
  constructor() {
    this.loggedIn = false
    this.showAccount = '';
  }

  ngOnInit(): void {
  }

  async getAccount() {
    console.log(this.loggedIn);
    const accounts: Array<any> | null | undefined = await window.ethereum.request({ method: 'eth_requestAccounts' });
    if (accounts) {
      const account = accounts[0];
      this.showAccount = account;
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

  navigateHome(){
    console.log("hello");
  }
  toggleSidebar(){
    console.log("hello2");
  }


}
