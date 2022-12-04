import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'cv-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss']
})
export class SoftSkillsComponent implements AfterViewInit {
  public readonly softSkills = [
    'Communicative', 'Efficient', 'Confident', 'Reasonable',
    'Responsive', 'Productive', 'Leader', 'Inventive',
    'Intelligent', 'Attentive', 'Focused', 'Self-Motivated'
  ];
  private wrapper: Element | null = null;
  private layers: Element[] = [];
  private wait = false;

  constructor(private readonly changeDetector: ChangeDetectorRef) {
  }

  public ngAfterViewInit(): void {
    this.wrapper = document.querySelector('.soft-skills');
    this.layers = Array.from(document.querySelectorAll('cv-soft-skill'));

    this.wrapper?.addEventListener('mousemove', this.initParallax);
    this.changeDetector.detectChanges();
  }

  private initParallax(evt: any): void {
    if (!this.wait) {
      this.wait = true;
      setTimeout(() => {
        if (!this.wrapper) {
          this.wrapper = document.querySelector('.soft-skills');
          console.log(this.wrapper)
        }

        if (!this.layers) {
          this.layers = Array.from(document.querySelectorAll('cv-soft-skill'));
          console.log(this.layers)
        }
        const clientX = evt.clientX;
        const clientY = evt.clientY;

        const parallaxLeftOffset = this.wrapper?.getBoundingClientRect().left;
        const parallaxTopOffset = this.wrapper?.getBoundingClientRect().top;
        const coordX = -(clientX - (parallaxLeftOffset || 0) - 0.5 * (this.wrapper?.getBoundingClientRect().width || 0));
        const coordY = -(clientY - (parallaxTopOffset || 0) - 0.5 * (this.wrapper?.getBoundingClientRect().height || 0));

        this.layers.forEach((layer)=>{
          const x = (coordX * (Math.random() * 0.05 + 0.05)).toFixed(2);
          const y = (coordY * (Math.random() * 0.05 + 0.05)).toFixed(2);
          layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
        });
        this.wait = false;
      }, 100);
    }
  }
}
