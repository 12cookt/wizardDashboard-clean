import { Component, OnInit } from '@angular/core';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private _loginService: LoginService;
  return: string = '';

  constructor(
    loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly sidebarService: NbSidebarService
  ) {
    this._loginService = loginService;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (this.return = params['return'] || '/home')
    );
  }

  get loginService(): LoginService {
    return this._loginService;
  }

  getAccount() {
    this._loginService
      .getAccount()
      .then((route) => this._loginService.routeToDashboard(this.return));
  }

  navigateHome() {
    console.log('hello');
  }
  toggleSidebar() {
    this.sidebarService.toggle();
    return false;
  }
}
