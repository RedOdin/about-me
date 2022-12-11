import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IIconLink } from '../../models/icon-link.model';

@Component({
  selector: 'cv-icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.scss']
})
export class IconLinkComponent implements OnInit {
  private readonly defaultColor = '#121C42';
  @Input() public iconLink?: IIconLink;

  public boxShadow = '';
  public isHovered = false;

  public ngOnInit(): void {
    this.boxShadow = `0 10px 20px ${this.iconLink?.iconColor || this.defaultColor}, 0 7px 7px ${this.iconLink?.iconColor || this.defaultColor}`;
  }
}
