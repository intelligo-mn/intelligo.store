import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CallToActionComponent } from './pages/call-to-action.component';
import { CallToActionModule } from './call-to-action.module';
import { ContactsComponent } from './pages/contacts.component';
import { ContactsModule } from './contacts.module';
import { ContentsComponent } from './pages/contents.component';
import { ContentsModule } from './contents.module';
import { FeaturesComponent } from './pages/features.component';
import { FeaturesModule } from './features.module';
import { FootersComponent } from './pages/footers.component';
import { FootersModule } from './footers.module';
import { FormsComponent } from './pages/forms.component';
import { FormsModule } from './forms.module';
import { HeadersComponent } from './pages/headers.component';
import { HeadersModule } from './headers.module';
import { NgModule } from '@angular/core';
import { PricingsComponent } from './pages/pricings.component';
import { PricingsModule } from './pricings.module';
import { TeamsComponent } from './pages/teams.component';
import { TeamsModule } from './teams.module';
import { TestimonialsComponent } from './pages/testimonials.component';
import { TestimonialsModule } from './testimonials.module';

const appRoutes: Routes = [
  { path: 'call-to-action', component: CallToActionComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contents', component: ContentsComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'footers', component: FootersComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'headers', component: HeadersComponent },
  { path: 'pricings', component: PricingsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'testimonials', component: TestimonialsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CallToActionComponent,
    ContactsComponent,
    ContentsComponent,
    FeaturesComponent,
    FootersComponent,
    FormsComponent,
    HeadersComponent,
    PricingsComponent,
    TeamsComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    CallToActionModule,
    ContactsModule,
    ContentsModule,
    FeaturesModule,
    FootersModule,
    FormsModule,
    HeadersModule,
    PricingsModule,
    TeamsModule,
    TestimonialsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
