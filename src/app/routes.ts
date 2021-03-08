import {Routes } from '@angular/router'
import { AboutComponent } from './about-page/about-page.component'
import { ContactComponent } from './contact-page/contact-page.component'
import { Error404Component } from './errors/404.component'
import { HomeComponent } from './home-page/home-page.component'

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

export const appRoutes:Routes = [
    {path: 'home', component: HomeComponent, data: {reuse: true}},
    {path: 'contact', component: ContactComponent,canDeactivate:["canDeactivateContact"]},
    {path: 'about', component: AboutComponent, data: {reuse: true}},
    {path: 'account', loadChildren: accountModule },
    {path: '404', component: Error404Component},
    {path: '**', redirectTo: 'home', pathMatch:"full"}
]