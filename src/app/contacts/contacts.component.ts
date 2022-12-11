import { Component } from '@angular/core';
import { IIconLink } from '../models/icon-link.model';
import {
  faLinkedin,
  faSkype,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'cv-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  public readonly contacts: IIconLink[] = [
    {
      icon: faLinkedin,
      path: 'https://www.linkedin.com/in/golenok/',
      iconColor: '#7fd4ff'
    },
    {
      icon: faSkype,
      path: 'https://join.skype.com/invite/otvNHpmgsUB6',
      iconColor: '#7fd4ff'
    },
    {
      icon: faTelegram,
      path: 'https://t.me/antongolenok',
      iconColor: '#7fd4ff'
    },
  ];
}
