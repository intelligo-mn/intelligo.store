import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {
  NizChip,
  NizChipModule,
  NizBanner,
  NizBannerModule,
} from '@notiz/ngx-design';

@NgModule({
  imports: [BrowserModule, NizChipModule, NizBannerModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elements: any[] = [
      [NizChip, 'nizs-chip'],
      [NizBanner, 'nizs-banner'],
    ];

    for (const [component, name] of elements) {
      if (!customElements.get(name)) {
        const el = createCustomElement(component, { injector: this.injector });
        customElements.define(name, el);
      }
    }
  }
}
