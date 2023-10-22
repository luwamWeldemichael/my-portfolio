import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PortfolioService, Summary} from "../services/portfolio.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  summary!:Summary;
  contactAsForm: FormGroup;

  constructor(private resumeService: PortfolioService, private formBuilder: FormBuilder) {
    this.contactAsForm = this.contactAsForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.summary = this.resumeService.getSummary();
  }

  handleMessage() {
    //:todo ..... form validation and all shall be done tomorrow
    this.contactAsForm.markAsTouched();
  }

}

