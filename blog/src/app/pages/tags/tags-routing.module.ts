import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagsComponent } from './tags.component';
import { TagComponent } from '@pages/tag/tag.component';
import { IsAvailable } from 'src/app/guards/available.guard';

const routes: Routes = [
  { path: '', component: TagsComponent },
  {
    path: ':slug',
    component: TagComponent,
    canActivate: [IsAvailable]
  },
  {
    path: '**',
    component: TagComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule {}
