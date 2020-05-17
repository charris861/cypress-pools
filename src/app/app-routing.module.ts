import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PoolsGalleryComponent } from './pools-gallery/pools-gallery.component';
import { ProductsComponent } from './products/products.component';
import { LegacyPoolsComponent } from './products/legacy-pools/legacy-pools.component';
import { SafetyCoversComponent } from './products/safety-covers/safety-covers.component';
import { RenovationComponent } from './products/additional-options/additional-options.component';
import { CovidComponent } from './covid/covid.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/legacy-pools', component: LegacyPoolsComponent },
  { path: 'products/safety-covers', component: SafetyCoversComponent },
  { path: 'products/additional-options', component: RenovationComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'pools', component: PoolsGalleryComponent },
  { path: 'covid-19', component: CovidComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
