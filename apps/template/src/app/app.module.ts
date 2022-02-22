import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgxMasonryModule } from 'ngx-masonry';

import { SharedModule } from "./shared/shared.module";

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AccountMembersComponent } from './core/components/account-members/account-members.component';
import { AccountMessagesComponent } from './core/components/account-messages/account-messages.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { AccountPaymentsComponent } from './core/components/account-payments/account-payments.component';
import { AccountProfileComponent } from './core/components/account-profile/account-profile.component';
import { AccountSettingComponent } from './core/components/account-setting/account-setting.component';
import { AccountWorksComponent } from './core/components/account-works/account-works.component';
import { AuthCoverLoginComponent } from './auth/auth-cover-login/auth-cover-login.component';
import { AuthCoverRePasswordComponent } from './auth/auth-cover-re-password/auth-cover-re-password.component';
import { AuthCoverSignupComponent } from './auth/auth-cover-signup/auth-cover-signup.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthLoginThreeComponent } from './auth/auth-login-three/auth-login-three.component';
import { AuthRePasswordComponent } from './auth/auth-re-password/auth-re-password.component';
import { AuthRePasswordThreeComponent } from './auth/auth-re-password-three/auth-re-password-three.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { AuthSignupThreeComponent } from './auth/auth-signup-three/auth-signup-three.component';
import { ChangelogComponent } from './core/components/changelog/changelog.component';
import { ComponentsComponent } from './core/components/components/components.component';
import { DocumentationComponent } from './core/components/documentation/documentation.component';
import { EmailAlertComponent } from './email/email-alert/email-alert.component';
import { EmailConfirmationComponent } from './email/email-confirmation/email-confirmation.component';
import { EmailInvoiceComponent } from './email/email-invoice/email-invoice.component';
import { EmailPasswordResetComponent } from './email/email-password-reset/email-password-reset.component';
import { ForumsComponent } from './core/components/forums/forums.component';
import { ForumsCommentsComponent } from './core/components/forums-comments/forums-comments.component';
import { ForumsTopicComponent } from './core/components/forums-topic/forums-topic.component';
import { HelpcenterFaqsComponent } from './core/components/helpcenter-faqs/helpcenter-faqs.component';
import { HelpcenterGuidesComponent } from './core/components/helpcenter-guides/helpcenter-guides.component';
import { HelpcenterOverviewComponent } from './core/components/helpcenter-overview/helpcenter-overview.component';
import { HelpcenterSupportRequestComponent } from './core/components/helpcenter-support-request/helpcenter-support-request.component';
import { IndexShopComponent } from './core/components/index-shop/index-shop.component';
import { PageComingsoonComponent } from './core/components/page-comingsoon/page-comingsoon.component';
import { PageComingsoon2Component } from './core/components/page-comingsoon2/page-comingsoon2.component';
import { PageContactDetailComponent } from './core/components/page-contact-detail/page-contact-detail.component';
import { PageContactOneComponent } from './core/components/page-contact-one/page-contact-one.component';
import { PageContactThreeComponent } from './core/components/page-contact-three/page-contact-three.component';
import { PageContactTwoComponent } from './core/components/page-contact-two/page-contact-two.component';
import { PageErrorComponent } from './core/components/page-error/page-error.component';
import { PageHistoryComponent } from './core/components/page-history/page-history.component';
import { PageInvoiceComponent } from './core/components/page-invoice/page-invoice.component';
import { PageJobApplyComponent } from './core/components/page-job-apply/page-job-apply.component';
import { PageJobCandidateComponent } from './core/components/page-job-candidate/page-job-candidate.component';
import { PageJobCompanyComponent } from './core/components/page-job-company/page-job-company.component';
import { PageJobDetailComponent } from './core/components/page-job-detail/page-job-detail.component';
import { PageJobsComponent } from './core/components/page-jobs/page-jobs.component';
import { PageJobsSidebarComponent } from './core/components/page-jobs-sidebar/page-jobs-sidebar.component';
import { PageMaintenanceComponent } from './core/components/page-maintenance/page-maintenance.component';
import { PagePricingComponent } from './core/components/page-pricing/page-pricing.component';
import { PagePrivacyComponent } from './core/components/page-privacy/page-privacy.component';
import { PageServicesComponent } from './core/components/page-services/page-services.component';
import { PageTeamComponent } from './core/components/page-team/page-team.component';
import { PageTermsComponent } from './core/components/page-terms/page-terms.component';
import { PageBlogDetailTwoComponent } from './core/components/page-blog-detail-two/page-blog-detail-two.component';
import { ShopCartComponent } from './core/components/shop-cart/shop-cart.component';
import { ShopCheckoutsComponent } from './core/components/shop-checkouts/shop-checkouts.component';
import { ShopMyaccountComponent } from './core/components/shop-myaccount/shop-myaccount.component';
import { ShopProductDetailComponent } from './core/components/shop-product-detail/shop-product-detail.component';
import { ShopProductsComponent } from './core/components/shop-products/shop-products.component';
import { WidgetComponent } from './core/components/widget/widget.component';
import { FeatherModule } from 'angular-feather';

import { allIcons } from 'angular-feather/icons';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShopListsComponent } from './core/components/shop-lists/shop-lists.component';
import { PageJobCompanyListComponent } from './core/components/page-job-company-list/page-job-company-list.component';
import { PageJobCandidateListComponent } from './core/components/page-job-candidate-list/page-job-candidate-list.component';
import { PageThankyouComponent } from './core/components/page-thankyou/page-thankyou.component';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccountMembersComponent,
    AccountMessagesComponent,
    RegistrationComponent,
    MasterPageComponent,
    AccountPaymentsComponent,
    AccountProfileComponent,
    AccountSettingComponent,
    AccountWorksComponent,
    AuthCoverLoginComponent,
    AuthCoverRePasswordComponent,
    AuthCoverSignupComponent,
    AuthLoginComponent,
    AuthLoginThreeComponent,
    AuthRePasswordComponent,
    AuthRePasswordThreeComponent,
    AuthSignupComponent,
    AuthSignupThreeComponent,
    ChangelogComponent,
    ComponentsComponent,
    DocumentationComponent,
    EmailAlertComponent,
    EmailConfirmationComponent,
    EmailInvoiceComponent,
    EmailPasswordResetComponent,
    ForumsComponent,
    ForumsCommentsComponent,
    ForumsTopicComponent,
    HelpcenterFaqsComponent,
    HelpcenterGuidesComponent,
    HelpcenterOverviewComponent,
    HelpcenterSupportRequestComponent,
    
    IndexShopComponent,
    PageComingsoonComponent,
    PageComingsoon2Component,
    PageContactDetailComponent,
    PageContactOneComponent,
    PageContactThreeComponent,
    PageContactTwoComponent,
    PageErrorComponent,
    PageHistoryComponent,
    PageInvoiceComponent,
    PageJobApplyComponent,
    PageJobCandidateComponent,
    PageJobCompanyComponent,
    PageJobDetailComponent,
    PageJobsComponent,
    PageJobsSidebarComponent,
    PageMaintenanceComponent,
    PagePricingComponent,
    PagePrivacyComponent,
    PageServicesComponent,
    PageTeamComponent,
    PageTermsComponent,
    
    PageBlogDetailTwoComponent,
    ShopCartComponent,
    ShopCheckoutsComponent,
    ShopMyaccountComponent,
    ShopProductDetailComponent,
    ShopProductsComponent,
    WidgetComponent,
    SwitcherComponent,
    
    ShopListsComponent,
    PageJobCompanyListComponent,
    PageJobCandidateListComponent,
    PageThankyouComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    ScrollToModule.forRoot(),
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
    NgxYoutubePlayerModule,
    NgbDropdownModule,
    CKEditorModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    SwiperModule,
    NgxTypedJsModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgxMasonryModule,
    LightboxModule,
    SharedModule
  ],
  exports: [
    FeatherModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
