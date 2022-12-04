import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.scss']
})
export class SoftSkillComponent {
  @Input() public skill = '';
}
