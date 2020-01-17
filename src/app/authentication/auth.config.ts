import { HttpClient } from '@angular/common/http';
import { OAuthService, OAuthModuleConfig, AuthConfig } from 'angular-oauth2-oidc';


export class ServerConfig {
  apiHost: '' ;
  clientId: '';
  issuer: '';
  version: '';
  showVersion: boolean;
}

let configuration: ServerConfig = new ServerConfig();

const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: '',
  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '',
  redirectUri: window.location.origin + '/login-callback',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email',
  logoutUrl: '',
  postLogoutRedirectUri: window.location.origin,
  showDebugInformation: true,
  sessionChecksEnabled: true,
  strictDiscoveryDocumentValidation: false,
};

export function initAuthentication(http: HttpClient, oauthService: OAuthService, oAuthModuleConfig: OAuthModuleConfig) {
  return (): Promise<any> => {
    return new Promise<void>(
      
      (resolve, reject) => {
        http.get<ServerConfig>('api/config').subscribe(async config => {

          configuration = config;
          
          oAuthModuleConfig.resourceServer.allowedUrls = [config.apiHost];

          authConfig.issuer = configuration.issuer;
          authConfig.clientId = configuration.clientId;
          authConfig.logoutUrl = `${authConfig.issuer}v2/logout?client_id=${authConfig.clientId}&returnTo=${encodeURIComponent(authConfig.redirectUri)}`;

          oauthService.configure(authConfig);

          await oauthService.loadDiscoveryDocument();

          // See if the hash fragment contains tokens (when user got redirected back)
          await oauthService.tryLogin();

          oauthService.setupAutomaticSilentRefresh();

          resolve();
        });
    });
  };
}

export function configurationFactory(): ServerConfig {
  return configuration;
}
