import { Component } from '@angular/core';

let tmpl = '';
for (let i = 0; i < 12; i++) {
  tmpl += `<footers-${i < 9 ? `0${i + 1}` : (i + 1)}></footers-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}

@Component({
  selector: 'footers',
  template: tmpl,
})

export class FootersComponent {
}
