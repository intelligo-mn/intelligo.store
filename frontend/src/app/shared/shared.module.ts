import { NgModule } from '@angular/core';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { SharedLibsModule } from './shared-libs.module';

@NgModule({
  imports: [SharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, HasAnyAuthorityDirective],
  entryComponents: [],
  exports: [SharedLibsModule, FindLanguageFromKeyPipe, HasAnyAuthorityDirective],
})
export class SharedModule {}
