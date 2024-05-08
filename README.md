## Introduction

Checkpoints:

- new app in Angular 17
- add tailwind 3.4.3
- add flowbite 2.3.0
- use angular animations


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



## Doc

### tailwind
- https://tailwindui.com/
- https://tailwindui.com/components
- https://tailwindcss.com/docs/installation
- https://tailwindcss.com/docs/guides/angular
- https://tailwindui.com/components/application-ui/navigation/navbars


### flowbite
- https://flowbite.com/
- https://flowbite.com/docs/getting-started/introduction/
- https://flowbite.com/docs/getting-started/angular/
- https://flowbite.com/docs/components/navbar/


### https://medium.com/@ujjawalr/show-hide-or-toggle-element-in-angular-289f64f55fb4
- https://medium.com/@ujjawalr/show-hide-or-toggle-element-in-angular-289f64f55fb4


### Angular Animations
- https://angular.io/guide/animations


### How to add BrowserAnimationsModule or NoopAnimationsModule to Standalone Component?
- https://stackoverflow.com/questions/72504142/how-to-add-browseranimationsmodule-or-noopanimationsmodule-to-standalone-compone


### Animate a hamburger menu from Tailwind in Angular
- https://stackoverflow.com/questions/66257566/animate-a-hamburger-menu-from-tailwind-in-angular


### Class and style binding
https://angular.io/guide/class-binding


### Tailwind CSS class: .cursor-pointer
- https://tailwind.build/classes/utilities/cursor-pointer


### Angular - @for
- https://angular.io/api/core/for