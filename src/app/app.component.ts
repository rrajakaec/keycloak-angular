import { Component } from '@angular/core';
import { OAuthService, AuthConfig, NullValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keycloak-angular';

  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8080/auth/realms/heroes',
    redirectUri: window.location.origin + '',
    clientId: 'spa-heroes',
    scope: 'openid profile email offline_access heroes',
    responseType: 'code',
    disableAtHashCheck: true,
    showDebugInformation: true,
    requireHttps: false,
    skipIssuerCheck: true
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  private configure() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }
}
