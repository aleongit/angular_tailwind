import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { APP_CONSTANTS, ITEMS_MENU } from '../../utils/constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive],
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

  constructor(private router: Router) {}

  isShowDropdown = false;
  isShowMenuMobile = false;

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
}
