import {
  Component,
  OnInit,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'niz-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class NizToolbar implements OnInit {

  @HostBinding('class') get class(){
    return 'w-full mx-auto flex items-center justify-between'
  }

  constructor() {}

  ngOnInit(): void {}


}
