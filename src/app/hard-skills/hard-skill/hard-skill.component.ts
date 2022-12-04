import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'cv-hard-skill',
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.scss']
})
export class HardSkillComponent {
  @Input() public icon?: IconDefinition;
  @Input() public title = '';
  @Input() public path = '';
  @Input() public iconColor = '#121C42';
  @Input() public progress = 0;
}
