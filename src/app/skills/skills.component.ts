import {Component, OnInit} from '@angular/core';
import {Education, Experience, ResumeService, Summary} from "../services/resume.service";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  summary!:Summary;
  education!: Education[];
  experience!: Experience[];
  skills!:string[];

  constructor(private resumeService: ResumeService) {
  }

  ngOnInit() {
    this.summary = this.resumeService.getSummary();
    this.education = this.resumeService.getEducation();
    this.experience = this.resumeService.getExperience();
    this.skills = this.resumeService.getSkills();
  }

  downloadResume() {
    const resumeFileName = 'Luwam_Weldemichael_Resume.pdf';
    const resumeFilePath = `/assets/resume/${resumeFileName}`;

    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = resumeFileName;
    link.click();
  }
}

