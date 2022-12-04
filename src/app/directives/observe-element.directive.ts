import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, debounceTime, Subscription } from 'rxjs';

@Directive({
  selector: '[cvObserveElement]',
  exportAs: 'intersection'
})
export class ObserveElementDirective implements OnInit, OnDestroy {
  @Input() public root: HTMLElement | null = null;
  @Input() public rootMargin = '0px';
  @Input() public threshold = 0.8;
  @Input() public debounceTime = 0;
  @Input() public isContinuous = false;

  @Output() public isIntersecting = new EventEmitter<boolean>();

  public subscription: Subscription | null = null;

  public intersecting = false;

  constructor(private element: ElementRef) {
  }

  public ngOnInit(): void {
    this.subscription = this.createAndObserve();
  }

  private createAndObserve(): Subscription {
    const options: IntersectionObserverInit = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    }

    return new Observable<boolean>(subscriber => {
      const intersectionObserver = new IntersectionObserver(entries => {
        const { isIntersecting } = entries[0];
        subscriber.next(isIntersecting);

        if (isIntersecting && !this.isContinuous) {
          intersectionObserver.disconnect();

        }
      }, options)

      intersectionObserver.observe(this.element.nativeElement);

      return {
        unsubscribe() {
          intersectionObserver.disconnect();
        }
      }
    })
      .pipe(debounceTime(this.debounceTime))
      .subscribe(status => {
        this.isIntersecting.emit(status);
        this.intersecting = status;
      })
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
