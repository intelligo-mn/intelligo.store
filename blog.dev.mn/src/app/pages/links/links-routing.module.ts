import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsAvailable } from 'src/app/guards/available.guard';
import { BlogPostModule } from '@pages/blog-post/blog-post.module';
import { BlogPostComponent } from '@pages/blog-post/blog-post.component';

const routes: Routes = [
  {
    path: ':slug',
    component: BlogPostComponent,
    canActivate: [IsAvailable]
  },
  { path: '', redirectTo: '/blog' },
  {
    path: '**',
    redirectTo: '/blog'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),BlogPostModule],
  exports: [RouterModule]
})
export class LinksRoutingModule {}