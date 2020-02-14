import { Component, OnInit } from '@angular/core'

import { ISkill, ResumeService } from '../resume.service'

@Component({
  selector: 'app-skilllist',
  templateUrl: './skilllist.component.html',
  styleUrls: ['./skilllist.component.scss']
})
export class SkilllistComponent implements OnInit {
  skills: ISkill[]

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.resumeService.getResume().subscribe(resume => (this.skills = resume.skills))
  }
}
