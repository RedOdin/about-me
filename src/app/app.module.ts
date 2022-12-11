import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

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
import { ObserveElementDirective } from './directives/observe-element.directive';
import { HardSkillComponent } from './hard-skills/hard-skill/hard-skill.component';
import { TitleComponent } from './components/title/title.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SoftSkillComponent } from './soft-skills/soft-skill/soft-skill.component';
import { IconLinkComponent } from './components/icon-link/icon-link.component';
import { PersonalProjectComponent } from './experience/personal-project/personal-project.component';

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
    ContactsComponent,
    ObserveElementDirective,
    HardSkillComponent,
    TitleComponent,
    SoftSkillComponent,
    IconLinkComponent,
    PersonalProjectComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
