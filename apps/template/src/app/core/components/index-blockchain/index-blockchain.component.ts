import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-blockchain',
  templateUrl: './index-blockchain.component.html',
  styleUrls: ['./index-blockchain.component.css']
})

/***
 * BlockChain Component
 */
export class IndexBlockchainComponent implements OnInit {

  /***
  * nav class set
  */
  navClass = 'nav-light';
  buttonList = true;

  constructor() { }

  ngOnInit(): void {
  }

}
