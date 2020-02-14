import { Component, OnInit } from '@angular/core'

import { ResumeService, IResume } from '../resume.service'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resume: IResume

  constructor(private resumeService: ResumeService) {}

  getResume(): void {
    this.resumeService.getResume().subscribe(resume => (this.resume = resume))
  }

  ngOnInit() {
    this.getResume()
  }
}
