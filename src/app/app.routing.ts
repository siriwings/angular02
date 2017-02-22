/**
 * Created by siri on 2017-02-21.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {AboutUserComponent} from "./about/about-user.component";
import { ContactComponent } from './contact/contact.component';
import {NotFoundComponent} from "./not-found/not-found.component";

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'about/:name',component:AboutUserComponent},
  {path:'contact',component:ContactComponent},
  { path: '**', component: NotFoundComponent }  //항상 맨 마지막에 와야함.
];

export const appRouting:ModuleWithProviders=RouterModule.forRoot(appRoutes);
