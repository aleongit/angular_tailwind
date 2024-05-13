import { Component } from '@angular/core';
import { APP_CONSTANTS } from '../../utils/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

constants = APP_CONSTANTS

}
