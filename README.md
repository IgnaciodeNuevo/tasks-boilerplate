# Base

Base: Sass, JavaScript architecture and Gulp Tasks


## Getting Started

Clone this repository on your local machine

```
git clone git@github.com:IgnaciodeNuevo/base.git Base
cd Base
```

### Prerequisites

To install dependencies following command:

```
npm install
```

To run the project use the following command:

```
gulp
```

### Estructura

```

├─ src/               # Master
│  ├─ assets/
│  │   ├─ fonts/      # Tipografías
│  │   ├─ images/     # Imágenes
│  │   ├─ javascript/ # Scripts
│  │   └─ styles/     # Estilos
│
├─ dist/              # Distribution
│  ├─ assets/
│  │   ├─ fonts/      # Tipografías
│  │   ├─ images/     # Imágenes optimizadas para producción
│  │   ├─ javascript/ # Scripts concatenados y minificado
│  │   └─ styles/     # Estilos concatenados y minificado
│
├─ .gitignore        # Lista de archivos excluídos en Git
├─ .stylelintignore  # Lista de archivos que no serán linteados por Stylelint
├─ .stylelintrc      # Linteando de estilos
├─ index.html        # HTML básico
├─ gulpfile.js       # Gulp!
└─ package.json      # Dependencias
```

## JavaScript Libraries

* [Font Face Observer](https://fontfaceobserver.com/)


## Plugins

* [browser-sync](https://github.com/BrowserSync/browser-sync)
* [critikal](https://github.com/addyosmani/critical)
* [del](https://github.com/sindresorhus/del)
* [eslint](https://github.com/eslint/eslint)
* [gulp-autoprefixer](https://github.com/gulp-community/gulp-cached)
* [gulp-changed](https://github.com/sindresorhus/gulp-changed)
* [gulp-clean-css](https://github.com/scniro/gulp-clean-css)
* [gulp-concat](https://github.com/gulp-community/gulp-concat)
* [gulp-notify](https://github.com/mikaelbr/gulp-notify)
* [gulp-plumber](https://github.com/floatdrop/gulp-plumber)
* [gulp-rename](https://github.com/hparra/gulp-rename)
* [gulp-responsive](https://github.com/mahnunchik/gulp-responsive)
* [gulp-rev](https://github.com/sindresorhus/gulp-rev)
* [gulp-sass](https://github.com/dlmanning/gulp-sass)
* [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps)
* [gulp-svgo](https://github.com/ben-eb/gulp-svgmin)
* [gulp-uglify](https://github.com/terinjokes/gulp-uglify)
* [gulp-watch](https://github.com/floatdrop/gulp-watch)
* [gulp-webp](https://github.com/sindresorhus/gulp-webp)
* [gulp](https://github.com/gulpjs/gulp)
* [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
* [stylelint-order](https://github.com/hudochenkov/stylelint-order)
* [stylelint-scss](https://github.com/kristerkari/stylelint-scss)
* [stylelint](https://github.com/stylelint/stylelint)
<!-- * [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) -->
<!-- * [gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite) -->

## Removed Plugins

* [gulp-cached](https://github.com/gulp-community/gulp-cached)
* [gulp-csso](https://github.com/ben-eb/gulp-csso)
* [gulp-newer](https://github.com/tschaub/gulp-newer)
* [gulp-uncss: (DEPRECATED)](https://github.com/ben-eb/gulp-uncss)
* [normalize.scss: (DEPRECATED)](https://github.com/kristerkari/normalize.scss)
