import { Component } from '@angular/core';

let tmpl = '';
for (let i = 0; i < 10; i++) {
  tmpl += `<testimonials-${i < 9 ? `0${i + 1}` : (i + 1)}></testimonials-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}

@Component({
  selector: 'testimonials',
  template: tmpl,
})

export class TestimonialsComponent {
}
