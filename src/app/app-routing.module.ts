import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'welcome', component: LandingComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
