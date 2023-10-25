import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PortfolioService, Summary} from "../../services/portfolio.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  summary!: Summary;
  emailSent: boolean = false;
  intervalId: any;
  contactAsForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', []],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });

  constructor(private portfolioService: PortfolioService, private formBuilder: FormBuilder, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.summary = this.portfolioService.getSummary();
  }

  handleMessage() {
    const formControls = [this.contactAsForm.controls['name'],
      this.contactAsForm.controls['email'],
      this.contactAsForm.controls['message'],
      this.contactAsForm.controls['subject']];
    formControls.forEach(formControl => formControl.markAsTouched());

    if (this.contactAsForm.valid) {
      const formData = this.contactAsForm.value;

      const apiUrl = 'https://https://hauo17o7y6.execute-api.us-east-1.amazonaws.com/V1/sendMessage';

      this.httpClient.post(apiUrl, formData).subscribe(
        (response) => {
          console.log('Form data submitted:', formData);
        },
        (error) => {
          console.error('Error submitting form:', error);
        }
      );
      this.emailSent = this.contactAsForm.valid;
      this.intervalId = setInterval(() => {
        this.emailSent = false;
        clearInterval(this.intervalId);
      }, 5000);

      this.contactAsForm.reset();
    } else {
      this.emailSent = false;
    }
  }

  isFormDisabled() {
    return (this.contactAsForm.controls['name'].invalid && this.contactAsForm.controls['name'].touched ||
      this.contactAsForm.controls['email'].invalid && this.contactAsForm.controls['email'].touched ||
      this.contactAsForm.controls['message'].invalid && this.contactAsForm.controls['message'].touched
    );
  }
}

