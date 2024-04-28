import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService, OAuthModule } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})

export class AuthGoogleService {

  constructor(private oauthService: OAuthService) {
    this.initLogin();
  }

  initLogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '249396934092-clsig1b44dv940ml8469utkgesrf8ke9.apps.googleusercontent.com',
      redirectUri: window.location.origin,
      scope: 'openid profile email',
    };

    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

  }

  login(){
    this.oauthService.initLoginFlow();
  }

  logout(){
    this.oauthService.logOut();
  }

  getProfile(){
    return this.oauthService.getIdentityClaims();
  }

}
