import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'cv-hard-skill',
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.scss']
})
export class HardSkillComponent implements OnInit {
  @Input() public icon?: IconDefinition;
  @Input() public title = '';
  @Input() public path = '';
  @Input() public iconColor = '#121C42';
  @Input() public progress = 0;

  public boxShadow = '';
  public isHovered = false;

  public ngOnInit(): void {
    this.boxShadow = `0 10px 20px ${this.iconColor}, 0 7px 7px ${this.iconColor}`;
  }
}
