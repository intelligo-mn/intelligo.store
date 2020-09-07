import { Component } from '@angular/core';

let tmpl = '';
for (let i = 0; i < 33; i++) {
  tmpl += `<features-${i < 9 ? `0${i + 1}` : (i + 1)}></features-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}

@Component({
  selector: 'features',
  template: tmpl,
})

export class FeaturesComponent {
}
