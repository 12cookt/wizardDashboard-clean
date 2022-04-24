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
      title: 'City of Ether',
      link: '/users',
      icon:"pin-outline",
    },
    {
      title: 'Story (Coming Soon)',
      icon:"clock-outline",
    },
    {
      title: 'Quest Board',
      icon:"map-outline",
      expanded: false,
      children: [
        {
          title: 'Change Password',
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Battle of etheen (Coming Soon)',
      icon: 'shield-outline',
      expanded: false,
      children: [
        {
          title: 'Change Password',
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Region Rankings',
      icon:"globe-outline",
      expanded: false,
      children: [
        {
          title: 'Change Password',
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Wizard Rankings',
      icon:"trending-up-outline",
      
    },
  ];

}




