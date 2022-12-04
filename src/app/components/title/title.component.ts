import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() public title = '';
}
