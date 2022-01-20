import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  @Input() memberData: Array<{
    profile: string,
    list?: Array<[]>,
    name: string,
    designation: string,
  }>;

  constructor() { }

  ngOnInit(): void {
  }

}
