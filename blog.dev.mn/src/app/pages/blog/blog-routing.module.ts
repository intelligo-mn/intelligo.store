import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPostComponent } from '@pages/blog-post/blog-post.component';
import { BlogComponent } from './blog.component';
import { IsAvailable } from 'src/app/guards/available.guard';

const routes: Routes = [
  { path: '', component: BlogComponent },
  {
    path: ':slug',
    component: BlogPostComponent,
    canActivate: [IsAvailable]
  },
  {
    path: '**',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
