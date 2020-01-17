import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private oauthService: OAuthService) { }

  ngOnInit() {
  }

  public login() {
    const callbackUrl = this.route.snapshot.queryParams.returl;
    this.oauthService.initImplicitFlow(callbackUrl);
}

  public logoff() {
      this.oauthService.logOut();
  }

  public get name() {
      let claims = this.oauthService.getIdentityClaims();
      if (!claims) return null;
      return claims;
  }

}
