import { Component } from '@angular/core';
import { Moralis } from 'moralis';
import { NbSidebarService, NbMenuItem, NbIconModule } from '@nebular/theme'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wizardDashboard-clean';

  constructor(private readonly sidebarService: NbSidebarService, private icon:NbIconModule) {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }
  items: NbMenuItem[] = [
    {
      title: 'Dashboard ',
      icon:"list-outline",
      link: '/dashboard',
      home: true
    },
    {
      title: 'City of Ether (Coming Soon)',
      link: '/users',
      icon:"pin-outline",
    },
    {
      title: 'Story (Coming Soon)',
      icon:"clock-outline",
    },
    {
      title: 'Quest Board (Coming Soon)',
      icon:"map-outline",
      expanded: false,
      // children: [
      //   {
      //     title: 'Change Password',
      //   },
      //   {
      //     title: 'Privacy Policy',
      //   },
      //   {
      //     title: 'Logout',
      //   },
      // ],
    },
    {
      title: 'Battle for Etheen (Coming Soon)',
      icon: 'shield-outline',
      expanded: false,
      // children: [
      //   {
      //     title: 'Change Password',
      //   },
      //   {
      //     title: 'Privacy Policy',
      //   },
      //   {
      //     title: 'Logout',
      //   },
      // ],
    },
    {
      title: 'Region Rankings (Coming Soon)',
      icon:"globe-outline",
      expanded: false,
      // children: [
      //   {
      //     title: 'Change Password',
      //   },
      //   {
      //     title: 'Privacy Policy',
      //   },
      //   {
      //     title: 'Logout',
      //   },
      // ],
    },
    {
      title: 'Wizard Rankings (Coming Soon)',
      icon:"trending-up-outline",

    },
  ];

}




