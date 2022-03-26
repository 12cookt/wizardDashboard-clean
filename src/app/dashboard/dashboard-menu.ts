import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/dashboard',
    home: true,
  },
  {
    title: 'City of Ether',
    group: true,
  },
  {
    title: 'Story (Coming Soon)',
    icon: 'layout-outline',
    children: [
      {
        title: 'Act 1',
        link: '/dashboard',
      },
    ],
  },
  {
    title: 'Quest Board',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Gathering Resources',
        link: '/dashboard',
      },
      {
        title: 'Potion Making',
        link: '/dashboard',
      },
      {
        title: 'Diplomacy',
        link: '/dashboard',
      },
      {
        title: 'Military',
        link: '/dashboard',
      },
      {
        title: 'Scholarship',
        link: '/dashboard',
      },
    ],
  },
  {
    title: 'Battle for Etheen (Coming Soon)',
    icon: 'edit-2-outline',
  },
  {
    title: 'Region Rankings',
    icon: 'keypad-outline',
    link: '/dashboard',
    children: [
      {
        title: 'Grid',
        link: '/dashboard',
      },
      {
        title: 'Icons',
        link: '/dashboard',
      },
      {
        title: 'Typography',
        link: '/dashboard',
      },
      {
        title: 'Animated Searches',
        link: '/dashboard',
      },
    ],
  },
  {
    title: 'Wizard Rankings',
    icon: 'keypad-outline',
    link: '/dashboard',
    children: [
      {
        title: 'Grid',
        link: '/dashboard',
      },
      {
        title: 'Icons',
        link: '/dashboard',
      },
      {
        title: 'Typography',
        link: '/dashboard',
      },
      {
        title: 'Animated Searches',
        link: '/dashboard',
      },
    ],
  },
];