import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavLinkComponent } from './header/nav-link/nav-link.component';
import { SummaryQualificationComponent } from './summary-qualification/summary-qualification.component';
import { HardSkillsComponent } from './hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { AdditionalSkillsComponent } from './additional-skills/additional-skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavLinkComponent,
    SummaryQualificationComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    ExperienceComponent,
    EducationComponent,
    AdditionalSkillsComponent,
    LanguagesComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
