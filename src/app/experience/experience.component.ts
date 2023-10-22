import {Component, OnInit} from '@angular/core';
import {Experience, PortfolioService} from "../services/portfolio.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience!: Experience[];

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.experience = this.portfolioService.getExperience();
  }
}
