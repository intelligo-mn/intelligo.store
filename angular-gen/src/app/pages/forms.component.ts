import { Component } from '@angular/core';

let tmpl = '';
for (let i = 0; i < 12; i++) {
  tmpl += `<forms-${i < 9 ? `0${i + 1}` : (i + 1)}></forms-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}

@Component({
  selector: 'forms',
  template: tmpl,
})

export class FormsComponent {
}
