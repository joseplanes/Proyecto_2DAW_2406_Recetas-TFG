declare var google: any;
import { Injectable , inject} from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService, OAuthModule } from 'angular-oauth2-oidc';
import { createDirectus, authentication } from '@directus/sdk';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private client = createDirectus('http://localhost:8055/').with(authentication());
  router = inject(Router);
  constructor() {}

  signOut(){
    google.accounts.id.disableAutoSelect();
    this.router.navigate(['']);
  }


  public async login(email: string, password: string, options?: any) {
    return this.client.login(email, password, options);
  }

  public async refresh() {
    return this.client.refresh();
  }

  public async logOut() {
    return this.client.logout();
  }

}
