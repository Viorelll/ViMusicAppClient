import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}


@Injectable({providedIn: 'root'})
export class AuthService {

    firebaseSignUpAuthEndpoint = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBgWZctiH0OxLJQCot3nbDJHKZxhtpjmyg";
    firebaseSignInAuthEndpoint = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBgWZctiH0OxLJQCot3nbDJHKZxhtpjmyg";
    user = new BehaviorSubject<User>(null);
    /**
     *
     */
    constructor(private httpClient: HttpClient, private router: Router) {
    }

    signUp(email: string, password: string) {
        return this.httpClient
                    .post<AuthResponseData>(this.firebaseSignUpAuthEndpoint, 
                        {
                            email: email,
                            password: password,
                            returnSecureToken: true
                        })
                        .pipe(
                            catchError(this.handleError),
                            tap(resData => {
                                this.handleAuthentication(
                                    resData.email,
                                    resData.localId,
                                    resData.idToken,
                                    +resData.expiresIn
                                );
                            })
                        );
    }

    login(email: string, password: string) {
        return this.httpClient
                    .post<AuthResponseData>(this.firebaseSignInAuthEndpoint, 
                    {
                        email: email,
                        password: password,
                        returnSecureToken: true
                    })
                    .pipe(
                        catchError(this.handleError),
                        tap(resData => {
                            this.handleAuthentication(
                                resData.email,
                                resData.localId,
                                resData.idToken,
                                +resData.expiresIn
                            );
                        })
                    );
    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/auth']);
    }

    private handleAuthentication(
        email: string,
        userId: string,
        token: string, 
        expiresIn: number) {
            
            const exipirationDate = new Date(new Date().getTime() + expiresIn * 1000);
            const user = new User(email, userId, token, exipirationDate);

            this.user.next(user);
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured!';

        if (!errorResponse || !errorResponse.error.error) {
            return throwError(errorMessage);
        }

        switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
            case 'INVALID_PASSWORD':
                errorMessage = 'This email or password is not correct'
                break;

        }

        return throwError(errorMessage);
    }
}