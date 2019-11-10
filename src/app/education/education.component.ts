import { Component, Input, OnInit } from '@angular/core'

import { IEducation } from '../resume.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() eduList: IEducation[]

  constructor() {}

  ngOnInit() {}
}
