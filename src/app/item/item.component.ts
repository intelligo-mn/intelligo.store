import { Component, OnInit, Input } from "@angular/core";
import { HNAPIService } from "../hn-api.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
  @Input() item;
  @Input() isMobile;
  constructor() {}

  ngOnInit() {

  }

}
