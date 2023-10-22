import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() {
  }

  getSummary(): Summary {
    return summary;
  }

  getEducation(): Education[] {
    return education;
  }

  getExperience(): Experience[]{
    return experience;
  }

  getSkills(): string[]{
    return skillsWithIcons;
  }
}

const summary: Summary =
  {
    description: "Experienced full-stack software engineer with almost one year of hands-on experience, " +
      "and a proven track record of successfully designing and implementing applications using modern technologies, " +
      "Agile development methodologies, and problem-solving skills. Efficient team member who can work effectively " +
      "in a fast-paced team environment to develop and deploy high-quality applications.",
    name: "Luwam Weldemichael",
    address: "Oakland, California 94619",
    phoneNumber: "+1-641-233-9156",
    email: 'luwamweldemichael23@gmail.com'
  };

export interface Summary {
  description: string;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
}

export interface Education {
  title: string;
  isCompleted: boolean;
  year: string;
  universityName: string;
}

const education: Education[] = [
  {
    title: "Master of Science in Computer Science",
    isCompleted: false,
    year: "April 2025",
    universityName: "Maharishi International University – Fairfield, Iowa",
  },
  {
    title: "Bachelor of Science in Information Technology",
    isCompleted: true,
    year: "Jan 2019 - May 2022",
    universityName: "Zayed University – Abu Dhabi, United Arab Emirates",
  }
]

export interface Experience {
  title: string;
  year: string;
  company: string;
  contributions: string[];
}

const experience: Experience[] = [
  {
    title: "Full-stack Software Engineer",
    year: "Jan 2022 - Nov 2022",
    company: "MVP APPLICATION & GAME DESIGN, Abu Dhabi, United Arab Emirates",
    contributions: [
      "Worked closely with teams, handling all project phases using Agile development methodology performing daily stand-ups, weekly iteration planning meetings (IPM), and retro/techtro meetings.",
      "Used JIRA as an agile project management tool for real-time collaboration with the team and prioritizing the backlogs.",
      "Developed fully responsive microservice applications using React, Spring Boot, REST, Messaging (Kafka), RestTemplate, Feign Client, Eureka Server, and Integration of modules with Version Control and CI/CD tools.",
      "Analyzed and optimized existing features and applications, performing coding, testing, and documentation."
    ]
  },
]

const skillsWithIcons: string[] = [
  '<i class="fa-brands fa-java fa-xl"></i>&nbsp Java',
  '<i class="bi bi-sun fa-xl"></i> Spring',
  '<i class="bi bi-door-open fa-xl"></i> Hibernate',
  '<i class="bi bi-cloud fa-xl"></i> REST',
  '<i class="bi bi-file-earmark-text fa-xl"></i> JSON',
  '<i class="bi bi-diagram-3 fa-xl"></i> Design Patterns',
  '<i class="fa-brands fa-angular fa-xl"></i> Angular',
  '<i class="fa-brands fa-react fa-xl"></i> React',
  '<i class="bi bi-book"></i> TypeScript',
  '<i class="bi bi-database fa-xl"></i> Databases: MySQL, MongoDB, Oracle',
  '<i class="fa-solid fa-server fa-xl"></i> Apache Tomcat',
  '<i class="bi bi-arrow-repeat fa-xl"></i> Agile Scrum',
  '<i class="bi bi-git fa-xl"></i> Git / <i class="bi bi-github fa-xl"></i> Github',
  '<i class="fa-brands fa-jenkins fa-xl"></i> Jenkins',
  '<i class="fa-brands fa-docker fa-xl"></i> Docker',
  '<i class="bi bi-hdd fa-xl"></i> Kubernetes'
];


