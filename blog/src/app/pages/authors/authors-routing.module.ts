import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './authors.component';
import { AuthorComponent } from '@pages/author/author.component';
import { IsAvailable } from 'src/app/guards/available.guard';

const routes: Routes = [
  { path: '', component: AuthorsComponent },
  {
    path: ':slug',
    component: AuthorComponent,
    canActivate: [IsAvailable]
  },
  {
    path: '**',
    component: AuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule {}
