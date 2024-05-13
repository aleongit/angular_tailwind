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
}
