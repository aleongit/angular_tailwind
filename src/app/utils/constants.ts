import { ItemNavigation } from '../interfaces/interfaces';

export const APP_CONSTANTS = {
  ICON_MENU: 'assets/llama.svg',
  IMG_PROFILE: 'assets/alpaca.jpg',
};

export const ITEMS_MENU: ItemNavigation[] = [
  {
    name: 'Home',
    url: '/',
    icon: '',
    color: '',
    items: [],
  },
  {
    name: 'Core Concepts',
    url: '/core-concepts',
    icon: '',
    color: '',
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
    icon: '',
    color: '',
    items: [],
  },
];
