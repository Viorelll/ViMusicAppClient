import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  private userSubscription: Subscription;
  isAuthenticated = false;

  constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.userSubscription = this.authService.user
            .subscribe(user => {
                this.isAuthenticated = !!user;  //samel like --- !user ? false : true;
                console.log(!user);
                console.log(!!user);
            });
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }

    onLogout() {
        this.authService.logout();
    }
}
