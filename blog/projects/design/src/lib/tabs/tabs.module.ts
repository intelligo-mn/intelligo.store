import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NizTabs } from './tabs.component';
import { NizTabModule } from '../tab/tab.module';

@NgModule({
  declarations: [NizTabs],
  imports: [CommonModule, NizTabModule],
  exports: [NizTabs],
})
export class NizTabsModule {}
