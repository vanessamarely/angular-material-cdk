# AngularMaterialDemo
Angular week demo application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.


## Set up the Development Environment and Run Demo

- Install Node.js® and npm if they are not already on your machine.

- Then install the Angular CLI globally.

npm install -g @angular/cli

- Clone this repository 

git clone https://github.com/vanessamarely/angular-material-cdk.git

- Go to the project directory and install packages

cd angular-material-demo
npm install

- Launch the server
ng serve --open


## How to create this Angular material app from scratch


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


- How did I know the names of the modules to import?

angular material documentation 

If you click on any of the components on the left menu, and then click on the API  tab, it provides you with the exact import line that you need to use.

In OVERVIEW tab you can find some html examples to added in your project.



