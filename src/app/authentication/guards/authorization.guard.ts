import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private oauthService: OAuthService, private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    if (!this.oauthService.hasValidAccessToken()) {

      this.router.navigate(['login'], { queryParams: { returl: encodeURIComponent(state.url) } });
      return false;
    }
    return true;
  }
}
