import {Component} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  post = {
    title: 'Creating a CI/CD Pipeline for Java Applications on AWS',
    excerpt: 'Continuous integration and continuous delivery (CI/CD) have become critical practices for modern software engineering teams looking to frequently deliver high-quality applications. By implementing automated CI/CD pipelines, developers can release updates faster, get feedback quicker, and spend less time on manual processes. For Java web applications, setting up a robust CI/CD workflow can greatly accelerate development cycles.',
    url: 'https://medium.com/@luwamweldemichael23/setting-up-a-ci-cd-pipeline-for-java-apps-on-aws-5520aa9a30ca'
  };
  openPost(url: string) {
    window.open(url, 'name', 'width=600,height=400');
  }
}
