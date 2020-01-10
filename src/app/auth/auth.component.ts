import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'auth-app',
    templateUrl: './auth.component.html'
})
export class AuthComponent {

    isLoginMode = true;
    isLoading = false;
    error: string = null;

    /**
     *
     */
    constructor(private authService: AuthService,
        private router: Router) {}
    

    onSubmit(authForm: NgForm) {
        console.log('Call onSubmit()');
        if (!authForm.valid) {
            return;
        }

        const email = authForm.value.email;
        const password = authForm.value.password;
        let authObs: Observable<AuthResponseData>;

        this.isLoading =  true;
   
        authObs = this.authService.login(email, password);         

        authObs.subscribe(response => {
            this.isLoading =  false;
            this.router.navigate(['/library']);
        }, errorMessage => {
            this.error = errorMessage;
            this.isLoading =  false;
        });

        authForm.reset();
    }

    onSignUp(authForm: NgForm) {
        console.log('Call onSignUp()');
        if (!authForm.valid) {
            return;
        }

        const email = authForm.value.email;
        const password = authForm.value.password;
        let authObs: Observable<AuthResponseData>;

        this.isLoading =  true;
    
        authObs = this.authService.signUp(email, password);
        
        authObs.subscribe(response => {
            this.isLoading =  false;
            this.router.navigate(['/library']);
        }, errorMessage => {
            this.error = errorMessage;
            this.isLoading =  false;
        });

        authForm.reset();
    }

}