import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalComponent } from './legal.component';
import { IsAvailable } from 'src/app/guards/available.guard';

const routes: Routes = [
  {
    path: ':slug',
    component: LegalComponent,
    canActivate: [IsAvailable]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalRoutingModule {}
