import { ItemNavigation } from '../interfaces/interfaces';

export const APP_CONSTANTS = {
  ICON_MENU: 'assets/llama.svg',
  IMG_PROFILE: 'assets/alpaca.jpg',
};

export const ITEMS_MENU: ItemNavigation[] = [
  {
    name: 'Home',
    url: '/',
    items: [],
  },
  {
    name: 'Core Concepts',
    url: '/core-concepts',
    items: [
      'Utility-First Fundamentals',
      'Handling Hover, Focus, and Other States',
      'Responsive Design',
      'Dark Mode',
    ],
  },
  {
    name: 'Customization',
    url: '/customization',
    items: [
      'Configuration',
      'Content Configuration',
      'Customizing Screens',
      'Customizing Colors',
    ],
  },
  {
    name: 'Page Not Found',
    url: '/pagenotfound',
    items: [],
  },
];
