import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent {
  @Input() public title = '';
  @Input() public link = '';
}
