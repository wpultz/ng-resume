import { Component, Input, OnInit } from '@angular/core'

import { ISkill } from '../resume.service'

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skillList: ISkill[]

  constructor() {}

  ngOnInit() {}
}
