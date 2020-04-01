import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GoogleMapComponent } from './contact-us/google-map/google-map.component';
import { SendEmailFormComponent } from './contact-us/send-email-form/send-email-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PoolsGalleryComponent } from './pools-gallery/pools-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactUsComponent,
    GoogleMapComponent,
    SendEmailFormComponent,
    AboutUsComponent,
    PoolsGalleryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    LightboxModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
