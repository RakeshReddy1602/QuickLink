import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenPageComponent } from './shorten-page/shorten-page.component';
import { RouteConfigLoadEnd, RouterModule, Routes } from '@angular/router';
import { UrlShortenServiceService } from './url-shorten-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FooterComponent } from './footer/footer.component';
import { CompanyComponent } from './company/company.component';
import { ExploreComponent } from './explore/explore.component';
import { ContactComponent } from './contact/contact.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { FAQsComponent } from './explore/faqs/faqs.component';
import { AlternativesComponent } from './explore/alternatives/alternatives.component';
import { DemoComponent } from './explore/demo/demo.component';
import { VideoTutorialsComponent } from './explore/video-tutorials/video-tutorials.component';
import { SalesComponent } from './contact/sales/sales.component';
import { SupportComponent } from './contact/support/support.component';
import { PartnershipComponent } from './contact/partnership/partnership.component';
import { RepresentationComponent } from './contact/representation/representation.component';
import { DevSolutionsComponent } from './solutions/dev-solutions/dev-solutions.component';
import { SmsSolutionsComponent } from './solutions/sms-solutions/sms-solutions.component';
import { EnterpriseSolComponent } from './solutions/enterprise-sol/enterprise-sol.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule } from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import {MatDialogModule } from '@angular/material/dialog'
import { AdvertiseWithUsComponent } from './company/advertise-with-us/advertise-with-us.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    ShortenPageComponent,
    FooterComponent,
    CompanyComponent,
    ExploreComponent,
    ContactComponent,
    SolutionsComponent,
    FAQsComponent,
    AlternativesComponent,
    DemoComponent,
    VideoTutorialsComponent,
    SalesComponent,
    SupportComponent,
    PartnershipComponent,
    RepresentationComponent,
    DevSolutionsComponent,
    SmsSolutionsComponent,
    EnterpriseSolComponent,
    HeaderComponent,
    DialogBoxComponent,
    AdvertiseWithUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ClipboardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [UrlShortenServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
