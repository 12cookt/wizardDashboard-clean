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

  constructor() { }

  ngOnInit(): void {
    const ethereumButton = document.querySelector('.enableEthereumButton');
    const showAccount = document.querySelector('.showAccount');
    
    // ethereumButton.addEventListener('click', () => {
    //   getAccount();
    //});
    
    // async function getAccount() {
    //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //   const account = accounts[0];
    //   showAccount.innerHTML = account;
    // }
  }

  navigateHome(){
    console.log("hello");
  }

  toggleSidebar(){
    console.log("toggled");
  }

}
