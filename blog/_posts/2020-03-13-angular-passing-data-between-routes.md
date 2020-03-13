In the current version this is now available in @angular/router.

Angular 7.2 introduces route state to NavigationExtras, which takes an object literal similar to queryParams, etc.

The state can be set imperatively:

this.router.navigate(['example'], { 
  state: { example: 'data' } 
});
or declaratively:

<a routerLink="/example" [state]="{ example: 'data' }">
  Hello World
</a>
And read in a top-level component using:

this.router.getCurrentNavigation().extras.state;
or within child components using:

window.history.state
Added a working example of it being used on
