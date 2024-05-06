## Introduction

Checkpoints:

- new app in Angular 17
- add tailwind



## Requeriments / Prerequisites

🖥️ node -v
→ v20.11.1

🖥️ npm -v
→ 10.5.2



## Dependencies

- 



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

## Doc

### tailwind
- https://tailwindcss.com/docs/guides/angular