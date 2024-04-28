declare var google: any;
import { Injectable , inject} from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService, OAuthModule } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})

export class AuthGoogleService {
  router = inject(Router);
  constructor() {}

  signOut(){
    google.accounts.id.disableAutoSelect();
    this.router.navigate(['']);
  }

}
