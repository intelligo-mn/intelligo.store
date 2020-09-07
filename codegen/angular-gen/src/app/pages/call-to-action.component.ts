import { Component } from '@angular/core';

let tmpl = '';
for (let i = 0; i < 22; i++) {
  tmpl += `<call-to-action-${i < 9 ? `0${i + 1}` : (i + 1)}></call-to-action-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}

@Component({
  selector: 'call-to-action',
  template: tmpl,
})

export class CallToActionComponent {
}
