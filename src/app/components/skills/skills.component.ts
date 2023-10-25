import {Component, OnInit} from '@angular/core';
import {Education, Experience, PortfolioService, Summary} from "../../services/portfolio.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  summary!:Summary;
  education!: Education[];
  experience!: Experience[];
  skills!:string[];

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.summary = this.portfolioService.getSummary();
    this.education = this.portfolioService.getEducation();
    this.experience = this.portfolioService.getExperience();
    this.skills = this.portfolioService.getSkills();
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

