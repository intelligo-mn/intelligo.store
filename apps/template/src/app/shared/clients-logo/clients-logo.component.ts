import { Component, OnInit } from '@angular/core';

interface client {
  image: string;
};

@Component({
  selector: 'app-clients-logo',
  templateUrl: './clients-logo.component.html',
  styleUrls: ['./clients-logo.component.css']
})
export class ClientsLogoComponent implements OnInit {

  /**
   * Clients Logo
   */
   clients_logo: client[] = [
    {
      image: "assets/images/client/amazon.svg"
    },
    {
      image: "assets/images/client/google.svg"
    },
    {
      image: "assets/images/client/lenovo.svg"
    },
    {
      image: "assets/images/client/paypal.svg"
    },
    {
      image: "assets/images/client/shopify.svg"
    },
    {
      image: "assets/images/client/spotify.svg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
