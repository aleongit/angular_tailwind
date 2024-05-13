import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeService {
  //signal
  darkModeSignal = signal<string>('light');

  updateDarkMode() {
    this.darkModeSignal.update((value) =>
      value === 'dark' ? 'light' : 'dark'
    );
  }

  constructor() {}
}
