import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landrick-angular';

  constructor(private router: Router) {
    /**
     * Unicons icon refreshed on route change.
     */
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        window['Unicons']['refresh']();
      }

      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
