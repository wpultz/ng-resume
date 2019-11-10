import { Component, Input, OnInit } from '@angular/core'

import { IExperience } from '../resume.service'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() expList: IExperience[]

  constructor() {}

  ngOnInit() {}
}
