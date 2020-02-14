import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ResumeComponent } from './resume/resume.component'
import { SkillComponent } from './skill/skill.component'
import { EducationComponent } from './education/education.component'
import { ExperienceComponent } from './experience/experience.component';
import { SkilllistComponent } from './skilllist/skilllist.component'

@NgModule({
  declarations: [AppComponent, ResumeComponent, SkillComponent, EducationComponent, ExperienceComponent, SkilllistComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
