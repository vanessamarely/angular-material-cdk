import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { TalksComponent } from './talks/talks.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'talks', component: TalksComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
