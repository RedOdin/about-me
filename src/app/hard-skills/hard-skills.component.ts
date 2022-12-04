import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngular, faCss3Alt, faHtml5, faSquareJs, faBootstrap, faSass, faLess, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCircleDot, faCode, faDatabase, faHashtag } from '@fortawesome/free-solid-svg-icons';

interface IHardSkill {
  icon: IconDefinition;
  title: string;
  path: string;
  iconColor: string;
  progress: number;
}

@Component({
  selector: 'cv-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.scss']
})
export class HardSkillsComponent {
  public readonly hardSkills: IHardSkill[] = [
    {
      icon: faAngular,
      progress: 95,
      title: 'Angular 2+',
      path: 'https://angular.io/',
      iconColor: '#DD0031'
    },
    {
      icon: faAngular,
      progress: 90,
      title: 'Angular js',
      path: 'https://angularjs.org/',
      iconColor: '#A6120D'
    },
    {
      icon: faCss3Alt,
      progress: 90,
      title: 'Css 3',
      path: 'https://en.wikipedia.org/wiki/CSS',
      iconColor: '#214CE5'
    },
    {
      icon: faHtml5,
      progress: 90,
      title: 'HTML 5',
      path: 'https://en.wikipedia.org/wiki/HTML',
      iconColor: '#E54C21'
    },
    {
      icon: faSquareJs,
      progress: 90,
      title: 'JavaScript',
      path: 'https://en.wikipedia.org/wiki/JavaScript',
      iconColor: '#EFD81D'
    },
    {
      icon: faBootstrap,
      progress: 95,
      title: 'Bootstrap 4',
      path: 'https://getbootstrap.com/docs/4.6/getting-started/introduction/',
      iconColor: '#7952B3'
    },
    {
      icon: faSass,
      progress: 85,
      title: 'Sass',
      path: 'https://sass-lang.com/',
      iconColor: '#CF649A'
    },
    {
      icon: faLess,
      progress: 85,
      title: 'Less',
      path: 'https://lesscss.org/',
      iconColor: '#1D365D'
    },
    {
      icon: faDatabase,
      progress: 90,
      title: 'MSSQL / MySQL',
      path: 'https://en.wikipedia.org/wiki/Microsoft_SQL_Server',
      iconColor: '#0067B8'
    },
    {
      icon: faCode,
      progress: 75,
      title: 'TypeScript',
      path: 'https://www.typescriptlang.org/',
      iconColor: '#2F74C0'
    },
    {
      icon: faReact,
      progress: 60,
      title: 'React Native',
      path: 'https://reactnative.dev/',
      iconColor: '#61DAFB'
    },
    {
      icon: faCircleDot,
      progress: 55,
      title: 'Ionic 5',
      path: 'https://ionicframework.com/',
      iconColor: '#176BFF'
    },
    {
      icon: faHashtag,
      progress: 55,
      title: '.NET',
      path: 'https://dotnet.microsoft.com/en-us/',
      iconColor: '#4E2ACD'
    }
  ];
}
