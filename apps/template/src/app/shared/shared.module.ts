import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

import { ScrollspyDirective } from './scrollspy.directive';
import { FeatherModule } from 'angular-feather';

import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsLogoComponent } from './clients-logo/clients-logo.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { BlogComponent } from './blog/blog.component';
import { CustomerTestmonialComponent } from './customer-testmonial/customer-testmonial.component';
import { ReviewTestmonialComponent } from './review-testmonial/review-testmonial.component';
import { SimplePricingComponent } from './simple-pricing/simple-pricing.component';
import { MemberComponent } from './member/member.component';

@NgModule({
  declarations: [
    ScrollspyDirective,
    TestimonialComponent,
    ClientsLogoComponent,
    ServicesComponent,
    PricingComponent,
    FeaturesComponent,
    BlogComponent,
    CustomerTestmonialComponent,
    ReviewTestmonialComponent,
    SimplePricingComponent,
    MemberComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FeatherModule,
    RouterModule
  ],
  exports: [TestimonialComponent, 
    ScrollspyDirective,
    ClientsLogoComponent, 
    ServicesComponent, 
    PricingComponent, 
    FeaturesComponent, 
    BlogComponent, 
    CustomerTestmonialComponent,
    ReviewTestmonialComponent,
    SimplePricingComponent,
    MemberComponent
  ]
})

export class SharedModule { }
