import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { APP_CONSTANTS } from '../../utils/constants';
import { HighlightService } from '../../services/highlight.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-customization',
  standalone: true,
  imports: [],
  templateUrl: './customization.component.html',
  styleUrl: './customization.component.scss',
})
export class CustomizationComponent implements AfterViewChecked {
  constants = APP_CONSTANTS;
  highlighted: boolean = false;

  constructor(
    private highlightService: HighlightService,
    private sanitized: DomSanitizer
  ) {}

  ngAfterViewChecked() {
    //to prevent multiple highlightAll method calls
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
  code1 = `/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  }`;

  code2 = `/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      './pages/**/*.{html,js}',
      './components/**/*.{html,js}',
    ],
    // ...
  }`;

  code3 = `/** @type {import('tailwindcss').Config} */
  module.exports = {
    theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    }
  }`;

  code4 = `/** @type {import('tailwindcss').Config} */
  module.exports = {
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'tahiti': {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // ...
      },
    },
  }`;
}
