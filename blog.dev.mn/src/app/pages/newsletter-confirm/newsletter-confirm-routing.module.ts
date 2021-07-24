import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsletterConfirmComponent } from './newsletter-confirm.component';

const routes: Routes = [{ path: '', component: NewsletterConfirmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsletterConfirmRoutingModule {}
