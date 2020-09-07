import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsletterUnsubscribeComponent } from './newsletter-unsubscribe.component';

const routes: Routes = [
  { path: '', component: NewsletterUnsubscribeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsletterUnsubscribeRoutingModule {}
