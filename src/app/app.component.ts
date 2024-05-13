import { Component, inject } from '@angular/core';
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  ViewportScroller,
} from '@angular/common';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { BacktotopComponent } from './components/backtotop/backtotop.component';
import { DarkmodeService } from './services/darkmode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    BacktotopComponent,
    AsyncPipe,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular_tailwind';

  ngOnInit(): void {
    initFlowbite();
  }

  private readonly document = inject(DOCUMENT);
  private readonly viewport = inject(ViewportScroller);

  readonly showScroll: Observable<boolean> = fromEvent(
    this.document,
    'scroll'
  ).pipe(map(() => this.viewport.getScrollPosition()?.[1] > 0));

  onScrollToTop(): void {
    this.viewport.scrollToPosition([0, 0]);
  }

  //darkmode
  darkModeService: DarkmodeService = inject(DarkmodeService);
}
