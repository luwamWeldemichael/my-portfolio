import {Component, OnInit} from '@angular/core';
import {Education, PortfolioService} from "../services/portfolio.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education!: Education[];

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.education = this.portfolioService.getEducation();
  }
}
