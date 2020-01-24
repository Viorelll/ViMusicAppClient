import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private oauthService: OAuthService,  private route: ActivatedRoute) 
  { }

  ngOnInit() {
    this.oauthService.initImplicitFlow(this.route.snapshot.queryParams.returl);
  }

}
