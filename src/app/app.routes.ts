import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { SignInComponent } from './auth/sign-in/sign-in.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Cuando la ruta es vacía, se carga el componente HomeComponent
    { path: 'sign-in', component: SignInComponent }
];
