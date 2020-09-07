import { Component } from '@angular/core';

let tmpl = '';
for (let i = 0; i < 10; i++) {
  tmpl += `<contacts-${i < 9 ? `0${i + 1}` : (i + 1)}></contacts-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}

@Component({
  selector: 'contacts',
  template: tmpl,
})

export class ContactsComponent {
}
