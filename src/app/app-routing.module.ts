import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WhatshappeningComponent } from './components/whatshappening/whatshappening.component';
import { BCaseStudyComponent } from './components/business/b-case-study/b-case-study.component';
import { BSolutionsComponent } from './components/business/b-solutions/b-solutions.component';
import { BTestimonialsComponent } from './components/business/b-testimonials/b-testimonials.component';
import { BProcessComponent } from './components/business/b-process/b-process.component';
import { RNextStepsComponent } from './components/residential/r-next-steps/r-next-steps.component';
import { RWarrantyAndAfterCareComponent } from './components/residential/r-warranty-and-after-care/r-warranty-and-after-care.component';
import { RTestimonialsComponent } from './components/residential/r-testimonials/r-testimonials.component';
import { RProductsComponent } from './components/residential/r-products/r-products.component';
import { ATeamAndWorkWithUsComponent } from './components/about/a-team-and-work-with-us/a-team-and-work-with-us.component';
import { AMissionAndCoreValuesComponent } from './components/about/a-mission-and-core-values/a-mission-and-core-values.component';
import { AOurGroupComponent } from './components/about/a-our-group/a-our-group.component';
import { ASocialEntrepreneurComponent } from './components/about/a-social-entrepreneur/a-social-entrepreneur.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'whatshappening', component: WhatshappeningComponent },
  { path: 'b-case-study', component: BCaseStudyComponent },
  { path: 'b-solutions', component: BSolutionsComponent },
  { path: 'b-testimonials', component: BTestimonialsComponent },
  { path: 'b-process', component: BProcessComponent },
  { path: 'b-why-us', component: WhyUsComponent },
  { path: 'b-contact-us', component: ContactUsComponent },
  { path: 'r-why-us', component: WhyUsComponent },
  { path: 'r-next-steps', component: RNextStepsComponent },
  {
    path: 'r-warranty-and-after-care',
    component: RWarrantyAndAfterCareComponent
  },
  { path: 'r-testimonials', component: RTestimonialsComponent },
  { path: 'r-products', component: RProductsComponent },
  { path: 'r-contact-us', component: ContactUsComponent },
  { path: 'a-team-and-work-with-us', component: ATeamAndWorkWithUsComponent },
  {
    path: 'a-mission-and-core-values',
    component: AMissionAndCoreValuesComponent
  },
  { path: 'a-our-group', component: AOurGroupComponent },
  { path: 'a-contact-us', component: ContactUsComponent },
  { path: 'a-social-entrepreneur', component: ASocialEntrepreneurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
