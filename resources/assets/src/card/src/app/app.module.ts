import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LatestWorksComponent } from './latest-works/latest-works.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';

const appRoutes: Routes = [
  {
    path: 'skills',
    component: SkillsComponent,
    data: { title: 'Skills' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact me' }
  },
  {
    path: 'projects',
    component: LatestWorksComponent,
    data: { title: 'Projects' }
  },
  {
    path: 'home',
    component: LandingPageComponent,
    data: { title: 'Home' }
  },
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LatestWorksComponent,
    ContactComponent,
    SkillsComponent
  ],
  imports: [
  BrowserModule,
  RouterModule.forRoot(appRoutes),
  FormsModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
