import { Component } from '@angular/core';
import {
  faAngular,
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faLess,
  faSass,
  faSquareJs
} from '@fortawesome/free-brands-svg-icons';
import { faCircleDot, faCode, faDatabase, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { IIconLink } from '../models/icon-link.model';

@Component({
  selector: 'cv-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  public readonly ItransitionStack: IIconLink[] = [
    {
      icon: faAngular,
      path: 'https://angular.io/',
      iconColor: '#DD0031'
    },
    {
      icon: faAngular,
      path: 'https://angularjs.org/',
      iconColor: '#A6120D'
    },
    {
      icon: faCss3Alt,
      path: 'https://en.wikipedia.org/wiki/CSS',
      iconColor: '#214CE5'
    },
    {
      icon: faHtml5,
      path: 'https://en.wikipedia.org/wiki/HTML',
      iconColor: '#E54C21'
    },
    {
      icon: faSquareJs,
      path: 'https://en.wikipedia.org/wiki/JavaScript',
      iconColor: '#EFD81D'
    },
    {
      icon: faBootstrap,
      path: 'https://getbootstrap.com/docs/4.6/getting-started/introduction/',
      iconColor: '#7952B3'
    },
    {
      icon: faSass,
      path: 'https://sass-lang.com/',
      iconColor: '#CF649A'
    },
    {
      icon: faLess,
      path: 'https://lesscss.org/',
      iconColor: '#1D365D'
    },
    {
      icon: faDatabase,
      path: 'https://en.wikipedia.org/wiki/Microsoft_SQL_Server',
      iconColor: '#0067B8'
    },
    {
      icon: faCode,
      path: 'https://www.typescriptlang.org/',
      iconColor: '#2F74C0'
    },
    {
      icon: faHashtag,
      path: 'https://dotnet.microsoft.com/en-us/',
      iconColor: '#4E2ACD'
    }
  ];

  public readonly NozomiStack: IIconLink[] = [
    {
      icon: faAngular,
      path: 'https://angular.io/',
      iconColor: '#DD0031'
    },
    {
      icon: faCss3Alt,
      path: 'https://en.wikipedia.org/wiki/CSS',
      iconColor: '#214CE5'
    },
    {
      icon: faHtml5,
      path: 'https://en.wikipedia.org/wiki/HTML',
      iconColor: '#E54C21'
    },
    {
      icon: faSass,
      path: 'https://sass-lang.com/',
      iconColor: '#CF649A'
    },
    {
      icon: faCode,
      path: 'https://www.typescriptlang.org/',
      iconColor: '#2F74C0'
    },
    {
      icon: faCircleDot,
      path: 'https://ionicframework.com/',
      iconColor: '#176BFF'
    }
  ];
}
