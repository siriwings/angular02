import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {appRouting} from "./app.routing";
import { NotFoundComponent } from './not-found/not-found.component';
import {AboutUserComponent} from "./about/about-user.component";
import {UserService} from "./shared/services/user.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    AboutUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
