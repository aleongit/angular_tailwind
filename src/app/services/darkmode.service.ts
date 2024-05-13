import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeService {
  //signal
  //darkModeSignal = signal<string>('light');
  //init signal to get local storage
  darkModeSignal = signal<string>(
    JSON.parse(window.localStorage.getItem('darkModeSignal') ?? 'light')
  );

  updateDarkMode() {
    this.darkModeSignal.update((value) =>
      value === 'dark' ? 'light' : 'dark'
    );
  }

  constructor() {
    effect(() => {
      window.localStorage.setItem(
        'darkModeSignal',
        JSON.stringify(this.darkModeSignal())
      );
    });
  }
}
