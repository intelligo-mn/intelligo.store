import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Renderer2,
  OnDestroy,
} from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';
import { ThemeService } from '@services/theme.service';
import {
  distinctUntilChanged,
  tap,
  startWith,
  takeUntil,
} from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit, OnDestroy {
  @Input() route: ScullyRoute;
  private onDestroy$ = new Subject();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private theme: ThemeService
  ) {}
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngOnInit(): void {
    this.theme.themeChange
      .pipe(
        distinctUntilChanged(),
        tap((theme) => {
          (this.el.nativeElement as HTMLElement)
            .querySelector('.utterances')
            ?.remove();
          const script: HTMLScriptElement = this.renderer.createElement(
            'script'
          );
          script.src = 'https://utteranc.es/client.js';
          script.setAttribute('repo', 'notiz-dev/notiz');
          script.setAttribute('issue-term', this.route.title);
          script.setAttribute('theme', `github-${theme}`);
          script.setAttribute('crossorin', 'anonymous');
          script.async = true;
          this.renderer.appendChild(this.el.nativeElement, script);
        }),
        takeUntil(this.onDestroy$)
      )
      .subscribe();
  }
}
