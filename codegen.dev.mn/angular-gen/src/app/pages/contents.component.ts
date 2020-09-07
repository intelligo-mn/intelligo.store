import { Component } from '@angular/core';

let tmpl = '';
for (let i = 0; i < 34; i++) {
  tmpl += `<contents-${i < 9 ? `0${i + 1}` : (i + 1)}></contents-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}

@Component({
  selector: 'contents',
  template: tmpl,
})

export class ContentsComponent {
}
