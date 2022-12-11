import { Component } from '@angular/core';
import { IIconLink } from '../../models/icon-link.model';
import { faCss3Alt, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cv-personal-project',
  templateUrl: './personal-project.component.html',
  styleUrls: ['./personal-project.component.scss']
})
export class PersonalProjectComponent {
  public readonly BoomStack: IIconLink[] = [
    {
      icon: faReact,
      path: 'https://reactnative.dev/',
      iconColor: '#61DAFB'
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
      icon: faCode,
      path: 'https://www.typescriptlang.org/',
      iconColor: '#2F74C0'
    }
  ];
}
