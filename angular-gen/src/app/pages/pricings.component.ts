import { Component } from '@angular/core';

let tmpl = '';
for (let i = 0; i < 10; i++) {
  tmpl += `<pricings-${i < 9 ? `0${i + 1}` : (i + 1)}></pricings-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}

@Component({
  selector: 'pricings',
  template: tmpl,
})

export class PricingsComponent {
}
