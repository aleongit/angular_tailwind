import { Component } from '@angular/core';
import { APP_CONSTANTS } from '../../utils/constants';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
  constants = APP_CONSTANTS;
}
