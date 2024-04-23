import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';


export const routes: Routes = [
    // Cuando la ruta es vacía, se carga el componente HomeComponent
    { path: '', component: HomeComponent },
    { path: 'sign-in', component: SignInComponent }
    
    

];
