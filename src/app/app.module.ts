import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import {ContactComponent} from "./contact/contact.component";
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { BlogComponent } from './blog/blog.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    HomeComponent,
    SkillsComponent,
    ContactComponent,
    ExperienceComponent,
    EducationComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
