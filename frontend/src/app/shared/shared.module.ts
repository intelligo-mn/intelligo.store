import { NgModule } from '@angular/core';
import { SharedLibsModule } from './shared-libs.module';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [SharedLibsModule],
  declarations: [LoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [LoginModalComponent],
  exports: [SharedLibsModule, LoginModalComponent, HasAnyAuthorityDirective],
})
export class SharedModule {}
