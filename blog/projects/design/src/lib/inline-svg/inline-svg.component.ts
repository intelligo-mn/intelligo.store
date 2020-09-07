import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'niz-inline-svg',
  template: '',
  styleUrls: ['inline-svg.component.scss'],
})
export class NizInlineSvg implements OnInit {
  @Input() svgSource: string;

  constructor(private host: ElementRef, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(this.svgSource, { responseType: 'text' })
      .pipe(tap((svg) => (this.host.nativeElement.innerHTML = svg)))
      .subscribe();
  }
}
