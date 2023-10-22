import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  phone: string = " 6412339156";
  email: string = " luwamweldemichael23@gmail.com";
  address: string = " Oakland CA, USA";
  degree: string = " Master";
  workStatus: string = " Open to Work";
  sps: string = "Experienced full-stack software engineer with almost one year of hands-on experience, and a proven track record of successfully designing and implementing applications using modern technologies, Agile development methodologies, and problem-solving skills. Efficient team member who can work effectively in a fast-paced team environment to develop and deploy high-quality applications.";

  downloadResume() {
    const resumeFileName = 'Luwam_Weldemichael_Resume.pdf';
    const resumeFilePath = `/assets/resume/${resumeFileName}`;

    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = resumeFileName;
    link.click();
  }
}
