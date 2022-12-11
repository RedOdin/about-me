import { Component, Input } from '@angular/core';
import { IIconLink } from '../../models/icon-link.model';

@Component({
  selector: 'cv-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private readonly defaultColor = '#121C42';
  @Input() public iconLink?: IIconLink;

  public boxShadow = '';
  public isHovered = false;

  public ngOnInit(): void {
    this.boxShadow = `0 10px 20px ${this.iconLink?.iconColor || this.defaultColor}, 0 7px 7px ${this.iconLink?.iconColor || this.defaultColor}`;
  }
}
