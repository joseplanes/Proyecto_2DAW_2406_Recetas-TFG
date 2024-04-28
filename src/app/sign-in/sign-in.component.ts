import { Component, NgModule, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthGoogleService } from '../auth-google.service';
import { routes } from '../app.routes';
import { OAuthModule } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor() { }
  // private google_service = inject(AuthGoogleService);

  // login() {
  //   this.google_service.login();
  // }
}
