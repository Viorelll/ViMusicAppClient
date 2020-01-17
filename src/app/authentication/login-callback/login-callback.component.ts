import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.css']
})
export class LoginCallbackComponent implements OnInit {

  constructor(private oauthService: OAuthService, private userService: UserService, private router: Router) 
  { }

  ngOnInit() {
    const redirectUrl = this.oauthService.state || '/';
    this.userService.registerUser()
      .subscribe(() => {
        this.router.navigateByUrl(redirectUrl);
      });
  }
}

