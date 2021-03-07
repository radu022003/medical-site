import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { MedicalAppComponent } from './medical-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from "./errors/404.component";
import { HomeComponent } from './home-page/home-page.component';
import { CarouselComponent } from "./home-page/carousel.component";
import { ContactComponent } from './contact-page/contact-page.component';
import { AboutComponent } from './about-page/about-page.component';
import { AboutThumbnailComponent } from "./about-page/thumbnail.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { 
  ContactService,
  CardComponent
} from "./shared/index";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouteReuseService } from "./RouteReuseService";
import {appRoutes} from './routes';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AccountModule } from "@app/account/account.module";


@NgModule({
  declarations: [
    MedicalAppComponent,
    NavbarComponent,
    Error404Component,
    HomeComponent,
    CarouselComponent,
    ContactComponent,
    AboutComponent,
    AboutThumbnailComponent,
    AppFooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AccountModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ContactService,
    {
      provide: 'canDeactivateContact',
      useValue: checkContactForm
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReuseService
      },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [MedicalAppComponent]
})
export class AppModule { }


function checkContactForm(component: ContactComponent){
  if (component.isDirty){
    return window.confirm("You haven't send the form, are you sure you want to leave the page?");

  }
  return true;
}