import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { GoogleAnalyticsService } from '@services/google-analytics.service';

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  title: string;
  url: string;
  svg: string;
  external?: boolean;
}

@Component({
  selector: 'niz-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class NizFooter implements OnInit {
  now = Date.now();

  @Input() footerSections: FooterSection[];
  @Input() copyrightUrl: string;
  @Input() createdWithSvgSources: string[];

  @HostBinding('class') get classes(): string{
    return 'block';
  }

  constructor(public analytics: GoogleAnalyticsService) {}

  ngOnInit(): void {}
}
