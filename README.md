# Eventmanager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## CREAR APP

ng new app

## BOOTSTRAP

Para instalar bootstrap

npm install bootstrap@next --save

en angular.json, añadimos la ruta relativa de los estilos y la ruta relativa del script

"node_modules/bootstrap/dist/css/bootstrap.min.css"
"node_modules/bootstrap/dist/js/bootstrap.min.js"

## ANGULAR MATERIAL

ng add @angular/material

importar componentes a usar en app.module

## COMANDOS

### INICIAR PAGINA

ng serve -o

### CREAR MODULO

ng g component components/name

### CREAR INTERFAZ

ng g interface components/name

### CREAR SERVICIO

ng g service components/name

### CREAR PIPE

ng g pipe pipes/name

### CREAR GUARD

ng g guard guard/name


## PROBLEMAS

Añadir a tsconfig.json, porque no deja tener un atributo sin inicializar.
"strictPropertyInitialization": false,