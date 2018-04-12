# AngularMaterialDemo
Angular week demo application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.


## Set up the Development Environment and Run the project

- Install Node.js® and npm if they are not already on your machine.

- Then install the Angular CLI globally.

npm install -g @angular/cli

- Clone this repository 

git clone https://github.com/vanessamarely/angular-material-cdk.git

- Go to the project directory and launch the server

cd angular-material-demo

ng serve --open

## How to create this demo from scratch

#step1

- Install Node.js® and npm if they are not already on your machine.

- Then install the Angular CLI globally.

npm install -g @angular/cli

ng new your-project-name --style=scss
e.g.: ng new angular-material-demo --style=scss

Note: '--style=scss' Change the default style extension to scss

- Install a couple of packages

npm i --save @angular/cdk @angular/material @angular/animations hammerjs

Modify your angular-cli.json file to add the Hammer.js library. 

"scripts": [
  "../node_modules/hammerjs/hammer.min.js"
],

- Add a Material template

Go to styles.scss file and add following line:

@import '~@angular/material/prebuilt-themes/indigo-pink.css';

- For animations support, please import BrowserAnimationsModule in app.module.ts

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

If you don't want to add another dependency to your project, you can use the NoopAnimationsModule.

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

- Change HTML content

Go to app.component.html and edit html



