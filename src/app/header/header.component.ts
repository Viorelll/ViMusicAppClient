import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../authentication/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    private userSubscription: Subscription; 
    isAuthenticated = false;
    userEmail:string;
  
    constructor(private userService : UserService) {}
    
    ngOnInit(): void {
        this.userSubscription = this.userService.user
            .subscribe(user => {
                this.isAuthenticated = !!user;  //samel like ---  !user ? false : true;

                if (this.isAuthenticated) {
                    this.userEmail = user.email;
                }
                console.log('HeaderComponent.isAuthenticated: ' + this.isAuthenticated );
            });
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }

    public onLogout() {
        this.userService.onLogout();
    }
    public onLogin() {
        this.userService.onLogin();
    }

}
