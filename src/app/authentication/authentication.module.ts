import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  OAuthModule,
  JwksValidationHandler,
  ValidationHandler,
  OAuthStorage,
  OAuthModuleConfig,
  OAuthService
} from 'angular-oauth2-oidc';
import { initAuthentication, configurationFactory, ServerConfig } from './auth.config';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginCallbackComponent } from './login-callback/login-callback.component';
import { LoginComponent } from './login/login.component';

const authModuleConfig: OAuthModuleConfig = {
  // Inject "Authorization: Bearer ..." 
  // header for these APIs:
  resourceServer: {
    allowedUrls: [],
    sendAccessToken: true,
  },
};

@NgModule({
  declarations: [
    LoginComponent,
    LoginCallbackComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [
    { provide: ValidationHandler, useClass: JwksValidationHandler },
    { provide: OAuthStorage, useValue: localStorage },
    { provide: APP_INITIALIZER, useFactory: initAuthentication, deps: [HttpClient, OAuthService, OAuthModuleConfig], multi: true },
    { provide: OAuthModuleConfig, useValue: authModuleConfig },
    { provide: ServerConfig, useFactory: configurationFactory }
  ],
})
export class AuthenticationModule { }
