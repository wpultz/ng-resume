import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ResumeComponent } from './resume/resume.component'
import { SkilllistComponent } from './skilllist/skilllist.component'

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'skills', component: SkilllistComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
