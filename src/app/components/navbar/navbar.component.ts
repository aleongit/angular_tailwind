import { Component } from '@angular/core';
import { JsonPipe, NgIf } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  ActivatedRoute,
} from '@angular/router';
import { APP_CONSTANTS, ITEMS_MENU } from '../../utils/constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive, JsonPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          opacity: 1,
          transform: 'scale(1, 1)',
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'scale(0.95, 0.95)',
        })
      ),
      transition('open => closed', [animate('100ms ease-in')]),
      transition('closed => open', [animate('300ms ease-out')]),
    ]),
  ],
})
export class NavbarComponent {
  constants = APP_CONSTANTS;
  itemsMenu = ITEMS_MENU;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {}

  isShowDropdown = false;
  isShowMenuMobile = false;
  itemUrl: string = '';

  get openCloseTriggerDropdown() {
    return this.isShowDropdown ? 'open' : 'closed';
  }

  get openCloseTriggerMobileMenu() {
    return this.isShowMenuMobile ? 'open' : 'closed';
  }

  toggleDropdown() {
    this.isShowDropdown = !this.isShowDropdown;
  }

  toggleMobileMenu() {
    this.isShowMenuMobile = !this.isShowMenuMobile;
  }

  //obtenir path url i treure fragment
  getUrlRouter() {
    //console.log(this.router);
    //console.log(this.router.url);
    const string = this.router.url.split('#', 1).toString();
    return string;
  }

  //transformar nom subitem a minúscules i sense espais ni caràcters especials
  transformUrl(string: string) {
    return string.toLowerCase().replace(/[^A-Z0-9]/gi, '');
  }
}
