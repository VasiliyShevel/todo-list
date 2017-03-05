import {Routes, RouterModule, Route, CanActivate } from "@angular/router"
import { Injectable } from '@angular/core';


//import { LoggedInGuard } from '';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent },
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegisterComponent },
];