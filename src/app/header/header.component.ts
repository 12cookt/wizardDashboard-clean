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
  constructor() { this.loggedIn = false }

  ngOnInit(): void {
    const ethereumButton = document.querySelector('.enableEthereumButton');
    const showAccount = document.querySelector('.showAccount');

    ethereumButton!.addEventListener('click', () => {
      getAccount();
    });

    async function getAccount(this: any) {
      const accounts: Array<any> | null | undefined = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts) {
        const account = accounts[0];
        showAccount!.innerHTML = account;
        this.loggedIn = true;
      }
    }
  }

  navigateHome(){
    console.log("hello");
  }
  toggleSidebar(){
    console.log("hello2");
  }


}
