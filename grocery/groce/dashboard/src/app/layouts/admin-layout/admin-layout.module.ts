import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(AdminLayoutRoutes), FormsModule, HttpClientModule, ClipboardModule],
  declarations: [DashboardComponent],
})
export class AdminLayoutModule {}
