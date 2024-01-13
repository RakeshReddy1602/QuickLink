import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { ShortenPageComponent } from './shorten-page/shorten-page.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FAQsComponent } from './explore/faqs/faqs.component';
import { AlternativesComponent } from './explore/alternatives/alternatives.component';
import { AboutUsComponent } from './company/about-us/about-us.component';
import { CareersComponent } from './company/careers/careers.component';
import { AdvertiseWithUsComponent } from './company/advertise-with-us/advertise-with-us.component';
import { routeGuardGuard } from './route-guard.guard';

const routes: Routes = [
  {path:'',component:AuthenticationComponent,canActivate : [routeGuardGuard]},
  {path:'shorten-page',component:ShortenPageComponent},
  {path:'authentication',component:AuthenticationComponent},
  {path :'faqs',component:FAQsComponent},
  {path:'alternatives',component:AlternativesComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'careers',component:CareersComponent},
  {path:'advertise-with-us',component:AdvertiseWithUsComponent},
];

const routerOptions : ExtraOptions = {
  scrollPositionRestoration : 'enabled',
  anchorScrolling : 'enabled',
}

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
