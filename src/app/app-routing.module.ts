import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PoolsGalleryComponent } from './pools-gallery/pools-gallery.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'pools', component: PoolsGalleryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
