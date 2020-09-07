import { Component } from '@angular/core';

let tmpl = '';
for (let i = 0; i < 8; i++) {
  tmpl += `<teams-${i < 9 ? `0${i + 1}` : (i + 1)}></teams-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}

@Component({
  selector: 'teams',
  template: tmpl,
})

export class TeamsComponent {
}
