import { Component } from '@angular/core';

let tmpl = '';
for (let i = 0; i < 20; i++) {
  tmpl += `<headers-${i < 9 ? `0${i + 1}` : (i + 1)}></headers-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}

@Component({
  selector: 'headers',
  template: tmpl,
})

export class HeadersComponent {
}
