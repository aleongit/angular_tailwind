## Introduction

Checkpoints:

- new app in Angular 17
- add tailwind 3.4.3
- add flowbite 2.3.0
- use angular animations
- add PrismJS

### Flowbite

Flowbite is an open-source library of UI components based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, templates, and more.

It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, but also some more advanced interactive elements such as datepickers.

All of the elements are built using the utility classes from Tailwind CSS and vanilla JavaScript with support for TypeScrip


## Requeriments / Prerequisites

🖥️ node -v
→ v20.11.1

🖥️ npm -v
→ 10.5.2



## Dependencies

- Flowbite



## Get Started

- git clone https://github.com/aleongit/angular_tailwind.git
- cd angular_tailwind
- npm install
- ng serve
- http://localhost:4200/



## Dev environment

- Angular CLI: 17.3.6
- node v20.11.1
- npm 10.5.0
- Visual Studio Code 1.87.0
- git version 2.38.0.windows.1
- Microsoft Windows [Versión 10.0.19045.4046]




## Run

- cd angular_tailwind
- ng serve
- http://localhost:4200/




## Project Steps

- **Create your project** 
Start by creating a new Angular project if you don’t have one set up already. The most common approach is to use *Angular CLI*.
```
ng new angular_tailwind
? Which stylesheet format would you like to use? SCSS
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
...
cd angular_tailwind
```

- **Install Tailwind CSS**
Install `tailwindcss` via npm, and then run the init command to generate a `tailwind.config.js` file.
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

- **Configure your template paths**
Add the paths to all of your template files in your `tailwind.config.js` file.
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- **Add the Tailwind directives to your CSS**
Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/styles.css` file.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- **Start your build process**
Run your build process with `ng serve`.
```
ng serve
```

- **Start using Tailwind in your project**
Start using Tailwind’s utility classes to style your content.
`app.component.html`
```
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
```

- **Install Flowbite**
Install Flowbite as a dependency using NPM by running the following command:
```
npm install flowbite
```

- **Configure Flowbite**
Require Flowbite as a plugin inside the `tailwind.config.js` file:
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
```

- **Use Flowbite**
Update the app.component.ts file to use the initFlowbite function to enable the interactive components via data attributes:
```
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
```

- **install PrismJS** 
```
npm i prismjs
npm i --save-dev @types/prismjs
```

- **Create highlight service**
```
import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';

declare var Prism: any;

@Injectable()
export class HighlightService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}
```

- **Use highlight service in your component**
```
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';

@Component({
...

})
export class Component implements OnInit, AfterViewChecked {

  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) {}

  /**
   * Lifecycle hook AfterViewChecked is used here to call the highlight service
   * when view is ready.
   * Method ngAfterViewChecked might be called multiple times.
   * I use highlighted boolean to check if highlighting is already done
   * to prevent multiple highlightAll method calls.
   */
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  /**
   * Fetch blog post from API
   */
  ngOnInit() {}
}
```

- **Add Prism styles**
Next add Prism styles into your `styles.scss`. Theme CSS is needed at least. Alternatively you can add CSS files directly into your HTML.
```
@import "../node_modules/prismjs/themes/prism-tomorrow.css";
```




## Doc

### tailwind
- https://tailwindui.com/
- https://tailwindui.com/components
- https://tailwindcss.com/docs/installation
- https://tailwindcss.com/docs/guides/angular
- https://tailwindui.com/components/application-ui/navigation/navbars
- https://tailwindcss.com/docs/font-size
- https://tailwindcss.com/docs/font-weight
- https://tailwindcss.com/docs/margin
- https://tailwindcss.com/docs/padding
- https://tailwindcss.com/docs/list-style-type
- https://tailwindcss.com/docs/list-style-image
- https://tailwindcss.com/docs/list-style-position
- https://tailwindcss.com/docs/position
- https://tailwindcss.com/docs/z-index
- https://tailwindcss.com/docs/customizing-colors
- https://tailwindcss.com/docs/table-layout



### flowbite
- https://flowbite.com/
- https://flowbite.com/docs/getting-started/introduction/
- https://flowbite.com/docs/getting-started/angular/
- https://flowbite.com/docs/components/navbar/
- https://flowbite.com/docs/components/buttons/


### Show/hide or toggle element in angular
- https://medium.com/@ujjawalr/show-hide-or-toggle-element-in-angular-289f64f55fb4


### Angular Animations
- https://angular.io/guide/animations


### How to add BrowserAnimationsModule or NoopAnimationsModule to Standalone Component?
- https://stackoverflow.com/questions/72504142/how-to-add-browseranimationsmodule-or-noopanimationsmodule-to-standalone-compone


### Animate a hamburger menu from Tailwind in Angular
- https://stackoverflow.com/questions/66257566/animate-a-hamburger-menu-from-tailwind-in-angular


### Class and style binding
- https://angular.io/guide/class-binding


### Tailwind CSS class: .cursor-pointer
- https://tailwind.build/classes/utilities/cursor-pointer


### Angular - @for
- https://angular.io/api/core/for


### Prism JS
- https://prismjs.com/


### Code syntax highlighting with Angular and Prism.js
- https://auralinna.blog/post/2017/code-syntax-highlighting-with-angular-and-prismjs


### Angular - InMemoryScrollingOptions
- https://angular.io/api/router/InMemoryScrollingOptions


### Turning on ScrollTop Restoration for the Standalone Angular Router
- https://fireflysemantics.medium.com/turning-on-scrolltop-restoration-for-the-standalone-angular-router-afd98bd8defd


### Angular innerHTML property not working while try to render button control
- https://stackoverflow.com/questions/56287237/angular-innerhtml-property-not-working-while-try-to-render-button-control


### Angular scroll-to-top implementation
- https://theangularpath.anirbanblogs.com/2021/06/angular-scroll-to-top-implementation.html


### Angular 17: Inject or constructor? Signals or Observables? ChangeDetection?
- https://medium.com/@fabiozuin/angular-17-inject-or-constructor-signals-or-observables-changedetection-a1b48a5479d9